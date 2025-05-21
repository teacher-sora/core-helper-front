import styles from "@/styles/footer.module.css";

const Footer = () => {
  const kakao = "https://open.kakao.com/o/gHKJIvxh";

  return (
    <div className={`flex flex-column align-center max-width gap-5 ${styles.footer}`}>
      <div className="flex gap-5">
        <p>버그, 오류 발견 시 문의 주세요</p>
        <a href={kakao} target="_blank">{ kakao }</a>
      </div>
      <p>제가 쓰려고 만든 건데, 특별히 배포해 드릴게요!</p>
      <p>혹시 커피 한 잔만... | 국민 841502-04-492808 | 권민석</p>
      <p>© 2025 메이플 코강 도우미</p>
    </div>
  );
}

export default Footer