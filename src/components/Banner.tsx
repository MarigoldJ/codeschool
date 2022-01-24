import { bannerImg } from "@asset/image";
import colors from "@styles/colors";
import { maxWidth } from "@styles/mixin";
import styled from "styled-components";

function Banner() {
  return (
    <Container>
      <div className="banner-main">
        <div className="banner-text">{"개발은\n코드스쿨과 함께"}</div>
        <img className="banner-image" src={bannerImg} alt="배너" />
      </div>
    </Container>
  );
}

export default Banner;

// Style
const Container = styled.header`
  padding: 104px 16px 56px;
  box-sizing: border-box;
  background-color: ${colors.primary1}; // TODO: Banner 배경 이미지 필요

  .banner-main {
    ${maxWidth}
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
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
