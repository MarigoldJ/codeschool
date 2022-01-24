import { logoImg, userIconImg } from "@asset/image";

function Header() {
  return (
    <header className="header">
      <img src={logoImg} alt="로고" />
      <img src={userIconImg} alt="사용자" />
    </header>
  );
}

export default Header;
