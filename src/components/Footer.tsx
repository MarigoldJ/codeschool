import { logoImg } from "@asset/image";

function Footer() {
  return (
    <footer>
      <img src={logoImg} alt="로고" />
      <div>
        대표: 내이름. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호
      </div>
      <div> Copyright by (주)카페인. All right reserved.</div>
      <div>이용약관 개인정보처리방침</div>
    </footer>
  );
}

export default Footer;
