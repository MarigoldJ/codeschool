import logoImg from "../asset/images/codeschool_banner.png";

function Banner() {
  return (
    <div>
      <div>개발은 코드스쿨과 함께</div>
      <img src={logoImg} alt="logo" />
    </div>
  );
}

export default Banner;
