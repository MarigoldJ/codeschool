import { useContext } from "react";
import { bannerImg } from "@asset/image";
import colors from "@styles/colors";
import { maxWidth } from "@styles/mixin";
import styled, { css } from "styled-components";
import { MobileContext } from "@context/MobileContext";

function Banner() {
  const { isMobile } = useContext(MobileContext);

  return (
    <Container isMobile={isMobile}>
      <div className="banner-main">
        <div className="banner-text">{"개발은\n코드스쿨과 함께"}</div>
        <img className="banner-image" src={bannerImg} alt="배너" />
      </div>
    </Container>
  );
}

export default Banner;

// Style
// TODO: Mobile 양식 추가
const Container = styled.header<{ isMobile: boolean }>`
  padding: 104px 16px 56px;
  box-sizing: border-box;
  background-color: ${colors.primary1}; // TODO: Banner 배경 이미지 필요

  .banner-main {
    ${maxWidth}

    ${(props) =>
      !props.isMobile &&
      css`
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      `}
  }

  .banner-text {
    flex: 1;

    white-space: pre-line;
    color: ${colors.white};

    font-weight: bold;
    font-size: 40px;
    line-height: 56px;
  }

  .banner-image {
    flex: 2;
    border-radius: 10px;
    background-position: center;
    background-size: cover;

    height: 400px;
  }
`;
