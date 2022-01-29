import { logoImg, userIconImg } from "@asset/image";
import { maxWidth } from "@styles/mixin";
import routes from "@utils/routes";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    checkScroll();
    window.addEventListener("scroll", checkScroll);
  });

  const checkScroll = () => {
    if (window.scrollY >= 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // TODO: 프로필 바로가기 링크 설정하기
  return (
    <Container isScrolled={isScrolled}>
      <div className="header-main">
        <Link to={routes.home}>
          <img className="logo" src={logoImg} alt="로고" />
        </Link>
        <img className="ic-user" src={userIconImg} alt="프로필" />
      </div>
    </Container>
  );
}

export default Navigation;

// Style
const Container = styled.nav<{ isScrolled: boolean }>`
  z-index: 100;
  position: fixed;
  width: 100%;

  ${(props) =>
    props.isScrolled &&
    css`
      background-color: white;
      transition: 0.5s;
    `}

  .header-main {
    ${maxWidth}
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px;
    gap: 20px;
    margin: 0px 20px;
  }

  .logo {
    height: 70px;
  }
  .ic-user {
    height: 30px;
  }
`;
