import styles from "@/styles/index.module.css"
import { JobCategory, JobClassCategory, SkillData } from "@/types/job.types";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { jobs } from "@/data/jobs";
import { jobClasses } from "@/data/job-classes";
import jobClassSkills from "@/data/skills";
import { ImageData } from "@/types/global.types";
import LoadingModal from "@/components/loading-modal";
import { runFindValidCoreCombinationWorker } from "@/utils/useFindValidCoreCombinationWorker";

const backgroundImage: ImageData = {
  src: require("@/public/images/treetops.png"),
  alt: "background"
}

const Index = () => {
  const [selectedJob, setSelectedJob] = useState<JobCategory>("warrior");
  const [selectedJobClass, setSelectedJobClass] = useState<JobClassCategory>("hero");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>("");
  const [resultMessage, setResultMessage] = useState<string>("");

  const [skillCombinations, setSkillCombinations] = useState<SkillData[][]>([]);

  const onSelectJob = (job: JobCategory) => {
    setSelectedJob(job);
  };

  const onSelectJobClass = (jobClass: JobClassCategory) => {
    setSelectedJobClass(jobClass);
    setSelectedSkills([]);
    setSkillCombinations([]);
  };

  const onSelectSkill = (skill: string) => {
    setSelectedSkills((prev) => prev.includes(skill) ? prev.filter((sk) => sk !== skill) : [...prev, skill]);
  };

  const onSelectImages = useCallback((target: HTMLInputElement) => {
    const files = target.files || [];
    const filesArray = Array.from(files);

    try {
      addImages(filesArray);
    } catch (error) {
      window.alert("에러 발생");
    } finally {
      setTimeout(() => { target.value = ""; }, 0);
    }
  }, [setSelectedImages, selectedImages]);

  const addImages = (filesArray: File[]) => {
    let sizeOfImages = 0;
    const limitOfImageSize = 100 * (1024 * 1024);

    selectedImages.forEach((selectedImage) => {
      sizeOfImages += selectedImage.size;
    });
    filesArray.forEach((file) => {
      sizeOfImages += file.size;
    });

    if (sizeOfImages > limitOfImageSize) return;

    const urls = filesArray.map((file) => URL.createObjectURL(file));
    setSelectedImages((prev) => [...filesArray, ...prev]);
    setImageUrls((prev) => [...urls, ...prev]);
  }

  const onRemoveImage = useCallback((index: number) => {
    setSelectedImages((prev) => prev.filter((_, idx) => idx !== index));
    setImageUrls((prev) => {
      const urlToRevoke = prev[index];
      if (urlToRevoke) {
        URL.revokeObjectURL(urlToRevoke);
      }

      return prev.filter((_, idx) => idx !== index)
    });
  }, []);

  const onToggleRecordScreen = () => {
    if (mediaStream) stopRecordScreen();
    else startRecordScreen();
  };

  const onCaptureRecordingScreen = async () => {
    if (!mediaStream || !videoElement) return;

    const canvas = document.createElement("canvas");
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;

    const context = canvas.getContext("2d");
    context?.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

    const blob: Blob = await new Promise((resolve) => {
      canvas.toBlob((b) => resolve(b!), "image/png");
    });
    const file: File = new File([blob], `${Date.now()}.png`, {
      type: "image/png"
    });

    addImages([file]);
  };

  const startRecordScreen = async () => {
    if (mediaStream) return;

    try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: false });
      mediaStream.getVideoTracks().forEach((track) => { track.onended = () => {
        stopRecordScreen();
      }});

      const videoElement = document.createElement("video");
      videoElement.srcObject = mediaStream;

      await videoElement.play();

      setMediaStream(mediaStream);
      setVideoElement(videoElement);
    } catch (error: any) {
      if (error.name === "NotAllowedError") return;

      window.alert("에러 발생");
    }
  };

  const stopRecordScreen = () => {
    try {
      if (!mediaStream || !videoElement) return;

      mediaStream.getTracks().forEach((track) => track.stop());
  
      videoElement.pause();
      videoElement.srcObject = null;
    } finally {
      setMediaStream(null);
      setVideoElement(null);
    }
  };

  const onSubmit = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);
    setResultMessage("");
    setSkillCombinations([]);

    if (mediaStream) stopRecordScreen();

    const formData = new FormData();

    formData.append("selected_job_class", selectedJobClass);
    selectedSkills.forEach((skill) => {
      formData.append("selected_skills", skill);
    })
    selectedImages.forEach((image) => {
      formData.append("images", image);
    });

    const timer1 = setTimeout(() => {
      setLoadingMessage("요청에 따라 오래 걸릴 수도 있어요");
    }, 3000);
    const timer2 = setTimeout(() => {
      setLoadingMessage("최대한 빨리 분석해 볼게요");
    }, 15000);
    const timer3 = setTimeout(() => {
      setLoadingMessage("잠시 다른 일을 하고 오셔도 될 것 같아요");
    }, 30000);
    const timer4 = setTimeout(() => {
      setLoadingMessage("아직 분석 중이니까 나가지 말아 주세요");
    }, 60000);
    
    try {
      const devServer = "http://127.0.0.1:8000/core-helper/";
      const liveServer = "https://core-helper-back.fly.dev/core-helper/";

      const res = await fetch(liveServer, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        setResultMessage("분석 중 오류가 발생했어요.\n잠시 후 다시 시도해 주세요.");
        return;
      }

      const data = await res.json();

      if (data["success"]) {
        const combinations = await findCoreCombinations(data["core_skill_names"]);

        if (combinations.length > 0) {
          setSkillCombinations(combinations);
        }
        else {
          setResultMessage("현재 보유한 코어로는 조합이 어려워요.\n조금 더 코어를 모아주세요.");
        }
      }
      else {
        setResultMessage(data["message"]);
      }
    } catch (error) {
      setResultMessage("서버와 연결할 수 없어요.\n잠시 후 다시 시도해 주세요.");
    } finally {
      setIsLoading(false);
      clearAllTimeout([timer1, timer2, timer3, timer4]);
      setTimeout(() => {
        setLoadingMessage("");
      }, 250);
    }
  }, [selectedJobClass, selectedSkills, selectedImages, mediaStream]);

  const clearAllTimeout = (timers: NodeJS.Timeout[]) => {
    timers.forEach((timer) => {
      clearTimeout(timer);
    });
  };

  const findCoreCombinations = async (coreSkills: string[][]) => {
    const mainSkillIndices = getMainSkillIndices(coreSkills);
    const allMainSkills = Object.keys(mainSkillIndices);

    const minCaseCount = Math.ceil(selectedSkills.length / 3) * 2;
    const maxCaseCount = Math.min(selectedSkills.length * 2, allMainSkills.length) + 1;

    let validCoreCombinations: number[][] = [];
    let minLength = Infinity;

    for (let count = minCaseCount; count < maxCaseCount; count++) {
      if (count > minLength) break;
      const mainSkillCombinations = generateCombinations(allMainSkills, count);

      for (const mainSkillCombo of mainSkillCombinations) {
        let indexedSkills: number[][] = [];

        for (const mainSkill of mainSkillCombo) {
          let validCoreIndex: number[] = [];

          for (const coreIdx of mainSkillIndices[mainSkill]) {
            if (coreSkills[coreIdx].some((skill) => selectedSkills.includes(skill))) {
              validCoreIndex.push(coreIdx);
            }
          }

          indexedSkills.push(validCoreIndex);
        }

        const validCoreCombo: number[] = await runFindValidCoreCombinationWorker(coreSkills, selectedSkills, indexedSkills);
        if (validCoreCombo) {
          minLength = validCoreCombo.length;
          validCoreCombinations.push(validCoreCombo);
        }
      }
    }

    if (validCoreCombinations.length === 0) return [];

    const highestLevelCombination = findHighestLevelCombination(coreSkills, validCoreCombinations, mainSkillIndices);
    const translatedCombination = translateToKorean(highestLevelCombination);

    return translatedCombination;
  }
  
  const getMainSkillIndices = (coreSkills: string[][]) => {
    let indices: { [key: string]: number[] } = {};
    coreSkills.forEach((coreSkill, index) => {
      indices[coreSkill[0]] = indices[coreSkill[0]] ? [...indices[coreSkill[0]], index] : [index];
    });

    return indices;
  };

  const generateCombinations = (array: string[], r: number) => {
    const results: string[][] = [];

    if (r === 1) return array.map((value) => [value]);

    array.forEach((value, index, original) => {
      const rest = original.slice(index + 1);
      const combinations = generateCombinations(rest, r - 1);
      const attached = combinations.map(combination => [value, ...combination]);
      results.push(...attached);
    });

    return results;
  };

  const findHighestLevelCombination = (coreSkills: string[][], validCoreCombinations: number[][], mainSkillIndices: { [key: string]: number[] }) => {
    const expPerCore = 50;
    const levelExpRequirements = [0, 55, 125, 210, 310, 425, 555, 700, 860, 1035, 1225, 1430, 1650, 1885, 2135, 2400, 2680, 2975, 3285, 3610, 3950, 4305, 4675, 5060, 5460];

    let totalCoreLevels: number[] = [];
    let validCoreNameCombinations: string[][][] = [];

    validCoreCombinations.forEach((validCoreCombination) => {
      let totalCoreLevel = 0;

      const validCoreNameCombination = validCoreCombination.map(coreSkillIndex => coreSkills[coreSkillIndex]);
      const mainSkillNames = validCoreNameCombination.map((skillName) => skillName[0]);

      mainSkillNames.forEach((skillName) => {
        const count = mainSkillIndices[skillName].length;
        const coreExp = count * expPerCore;

        levelExpRequirements.some((expRequirement, index) => {
          if (coreExp <= expRequirement) {
            totalCoreLevel += index;
            return true;
          }
        });
      });

      totalCoreLevels.push(totalCoreLevel);
      validCoreNameCombinations.push(validCoreNameCombination);
    });

    const maxLevel = Math.max(...totalCoreLevels);
    const maxLevelIndex = totalCoreLevels.indexOf(maxLevel);

    return validCoreNameCombinations[maxLevelIndex];
  };

  const translateToKorean = (coreSkills: string[][]) => {
    let translatedArray: SkillData[][] = [];

    coreSkills.forEach((coreSkill) => {
      let skillCombination: SkillData[] = [];

      coreSkill.forEach((skill) => {
        jobClassSkills[selectedJobClass].map((jobClassSkill) => {
          if (jobClassSkill["skill"] === skill) {
            skillCombination = [...skillCombination, jobClassSkill];
          }
        });
      });

      translatedArray = [...translatedArray, skillCombination];
    });

    return translatedArray;
  };

  useEffect(() => {
    setResultMessage("");
  }, [selectedJob, selectedJobClass, selectedSkills, selectedImages]);

  return (
    <div className="relative flex flex-column justify-center align-center flex-1">
      <LoadingModal isVisible={isLoading && loadingMessage !== ""} message={loadingMessage} />
      <div className={`flex ${styles.background}`}>
        <Image src={backgroundImage.src} alt={backgroundImage.alt} />
      </div>
      <div className="mt-80 flex flex-column align-center">
        <h1 className="font-normal white">메이플 코어 강화 도우미</h1>
        <hr className={`${styles.bannerLine}`} />
      </div>
      <div className={`mt-40 mb-150 max-width flex ${styles.table}`}>
        <div className="flex max-width gap-20">
          <div className={`flex flex-column gap-15 ${styles.left}`}>
            <div className={`flex flex-column background-white pd-10 gap-15 br-5 ${styles.jobs}`}>
              {
                jobs.map((job) => (
                  <label htmlFor={job.job} className="flex space-between pointer transition-150" key={job.job}>
                    <input type="radio" className="none" id={job.job} name="jobList" onChange={() => onSelectJob(job.job)} checked={job.job === selectedJob} />
                    <p>{ job.name }</p>
                    <div className={`flex max-width overflow-hidden relative ${styles.jobImage}`}>
                      <div className="absolute transition-250" />
                      <Image className="transition-250" src={job.image.src} alt={job.image.alt} />
                    </div>
                  </label>
                ))
              }
            </div>
            <div className="flex flex-column background-white pd-10 gap-15 br-5">
              <div className="flex flex-column">
                <p className="font-14">코어 분해 탭 화면을 1장 이상 선택해 주세요.</p>
                <p className="font-14 red">잠금된 코어는 분석되지 않습니다.</p>
              </div>
              <div className={`flex gap-10 ${styles.captureControls}`}>
                <button className="flex justify-center pointer max-width pd-5 br-5 transition-150" onClick={() => onToggleRecordScreen()} data-status={mediaStream ? "recording" : "idle"}>{ mediaStream ? "중지" : "녹화" }</button>
                <button className="flex justify-center pointer max-width background-white pd-5 br-5 transition-150" onClick={() => onCaptureRecordingScreen()} disabled={mediaStream === null}>캡처</button>
              </div>
              <label htmlFor="screenshot-upload" className={`flex justify-center pointer transition-150 ${styles.upload}`}>
                <input type="file" className="none" id="screenshot-upload" accept=".jpg,.jpeg,.png" onChange={(event) => onSelectImages(event.target)} multiple />
                <p>이미지 선택 (최대 100MB)</p>
              </label>
              {
                imageUrls.length > 0 && (
                  <div className="flex flex-column gap-5">
                    {
                      imageUrls.map((imgUrl, idx) => (
                        <div className={`flex justify-center align-center max-width relative pointer ${styles.uploadedImage}`} onClick={() => onRemoveImage(idx)} key={imgUrl}>
                          <Image className="transition-250" src={imgUrl} alt="" fill />
                        </div>
                      ))
                    }
                  </div>
                )
              }
            </div>
          </div>
          <div className={`flex flex-column gap-15 ${styles.right}`}>
            <div className={`grid justify-center background-white pd-10 gap-15 br-5 ${styles.jobClasses}`}>
              {
                jobClasses[selectedJob].map((jobClass) => (
                  <label htmlFor={jobClass.jobClass} className="pointer br-5 overflow-hidden transition-150" key={jobClass.jobClass}>
                    <input type="radio" className="none" id={jobClass.jobClass} name="job" onChange={() => onSelectJobClass(jobClass.jobClass)} checked={jobClass.jobClass === selectedJobClass} />
                    <Image className="transition-250" src={jobClass.image.src} alt={jobClass.image.alt} priority />
                  </label>
                ))
              }
            </div>
            <div className={`grid justify-center background-white pd-10 gap-10 br-5 ${styles.skills}`}>
              {
                jobClassSkills[selectedJobClass].map((skill) => (
                  <label htmlFor={skill.skill} className="pointer flex pd-5 br-5 gap-5 transition-150" key={skill.skill}>
                    <input type="checkbox" className="none" id={skill.skill} name="skill" onChange={() => onSelectSkill(skill.skill)} checked={selectedSkills.includes(skill.skill)} />
                    <Image className="transition-150" src={skill.image.src} alt={skill.image.alt} />
                    <div className="flex max-width space-between">
                      <p className="transition-150">{ skill.name }</p>
                      { skill.isEssential && <p className="green">필수</p> }
                      { skill.isOptional && <p className="coral">선택</p> }
                    </div>
                  </label>
                ))
              }
            </div>
            <button className={`flex justify-center white pointer pd-10 br-5 transition-150 ${styles.submit}`} onClick={() => onSubmit()} disabled={!(selectedSkills.length > 0 && selectedImages.length > 0) || isLoading}>
              {
                isLoading ? "도우미 실행 중 . . ." : "도우미 실행"
              }
            </button>
            {
              (!isLoading && resultMessage.length > 0) ? (
                <div className="flex justify-center">
                  <p className="text-center space-pre font-14 white">{ resultMessage }</p>
                </div>
              ) : (!isLoading && skillCombinations.length > 0) ? (
                <div className={`grid gap-15 ${styles.result}`}>
                  {
                    skillCombinations.map((skillCombination, idx) => (
                      <div className="flex flex-column background-white pd-10 br-5 gap-10" key={idx}>
                        {
                          skillCombination.map((skill, idx) => (
                            <div className={`flex pd-5 br-5 gap-5 ${idx === 0 ? "background-aliceblue" : ""}`} key={skill.skill}>
                              <Image src={skill.image.src} alt={skill.image.alt} />
                              <div className="flex max-width space-between">
                                <p>{ skill["name"] }</p>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    ))
                  }
                </div>
              ) : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;