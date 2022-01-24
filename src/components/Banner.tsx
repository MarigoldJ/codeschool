import { bannerImg } from "@asset/image";

function Banner() {
  return (
    <div>
      <div>개발은 코드스쿨과 함께</div>
      <img src={bannerImg} alt="logo" />
    </div>
  );
}

export default Banner;
