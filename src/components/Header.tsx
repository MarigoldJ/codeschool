import logoImage from "../asset/images/codeschool_logo.png";
import userIcon from "../asset/images/codeschool_user_icon.png";

function Header() {
  return (
    <header className="header">
      <img src={logoImage} alt="로고" />
      <img src={userIcon} alt="사용자" />
    </header>
  );
}

export default Header;
