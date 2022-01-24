import { logoImg } from "@asset/image";
import fonts from "@styles/fonts";
import { maxWidth } from "@styles/mixin";
import styled from "styled-components";

function Footer() {
  const FOOTER_TEXT1 =
    "대표: 내이름. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호";
  const FOOTER_TEXT2 = "Copyright by (주)카페인. All right reserved.";
  const FOOTER_TEXT3 = "이용약관 개인정보처리방침";

  return (
    <Container>
      <div className="footer-main">
        <img className="footer-logo" src={logoImg} alt="로고" />
        <div className="footer-text">{`${FOOTER_TEXT1}\n\n${FOOTER_TEXT2}\n${FOOTER_TEXT3}`}</div>
        <div className="footer-ellipse">
          <Circle radius={15} />
          <Circle radius={15} />
          <Circle radius={15} />
        </div>
      </div>
    </Container>
  );
}

export default Footer;

// Style
const Container = styled.footer`
  ${maxWidth}

  .footer-main {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    background-color: #eeeeee;
    padding: 20px;
  }

  .footer-logo {
    height: 50px;
  }
  .footer-text {
    ${fonts.Body2}
    white-space: pre-wrap;
  }
  .footer-ellipse {
    display: flex;
    flex-direction: row;
  }
`;

const Circle = styled.div<{ radius: number }>`
  background-color: gray;

  height: ${(props) => 2 * props.radius}px;
  width: ${(props) => 2 * props.radius}px;
  border-radius: ${(props) => props.radius}px;

  margin: 5px;
`;
