import { logoImg } from "@asset/image";
import { MobileContext } from "@context/MobileContext";
import fonts from "@styles/fonts";
import { maxWidth } from "@styles/mixin";
import { useContext } from "react";
import styled from "styled-components";

function Footer() {
  const FOOTER_TEXT1 =
    "대표: 내이름. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호";
  const FOOTER_TEXT2 = "Copyright by (주)카페인. All right reserved.";
  const FOOTER_TEXT3 = "이용약관 개인정보처리방침";

  const { isMobile } = useContext(MobileContext);

  return isMobile ? (
    <MobileContainer>
      <div className="footer-main">
        <div className="footer-top">
          <img className="footer-logo" src={logoImg} alt="로고" />
          <div className="footer-ellipse">
            <Circle radius={15} />
            <Circle radius={15} />
            <Circle radius={15} />
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-text">{`${FOOTER_TEXT1}\n\n${FOOTER_TEXT2}\n${FOOTER_TEXT3}`}</div>
        </div>
      </div>
    </MobileContainer>
  ) : (
    <DesktopContainer>
      <div className="footer-main">
        <img className="footer-logo" src={logoImg} alt="로고" />
        <div className="footer-text">{`${FOOTER_TEXT1}\n\n${FOOTER_TEXT2}\n${FOOTER_TEXT3}`}</div>
        <div className="footer-ellipse">
          <Circle radius={15} />
          <Circle radius={15} />
          <Circle radius={15} />
        </div>
      </div>
    </DesktopContainer>
  );
}

export default Footer;

// Style
const Container = styled.footer`
  background-color: #eeeeee;
  .footer-main {
    ${maxWidth}
    padding: 20px;
    display: flex;
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
const DesktopContainer = styled(Container)`
  .footer-main {
    justify-content: space-between;
    align-items: flex-start;
  }
`;
const MobileContainer = styled(Container)`
  .footer-main {
    flex-direction: column;
    align-items: center;
  }
  .footer-top {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .footer-bottom {
    margin-top: 10px;
    width: 100%;
  }
`;

const Circle = styled.div<{ radius: number }>`
  background-color: gray;

  height: ${(props) => 2 * props.radius}px;
  width: ${(props) => 2 * props.radius}px;
  border-radius: ${(props) => props.radius}px;

  margin: 5px;
`;
