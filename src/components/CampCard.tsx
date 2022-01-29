import { Link } from "react-router-dom";
import routes from "@utils/routes";
import { TypeCamp } from "@utils/type";
import fonts from "@styles/fonts";
import styled from "styled-components";

// TODO: Mobile 양식 추가
function CampCard({ camp }: { camp: TypeCamp }) {
  return (
    <Link to={routes.campdetail + camp.id}>
      <Container bgImg={camp.classThumbnail}>
        <BgOpacityBlack />
        <div className="camp-main">
          <div className="camp-head">{camp.recruitStatus}</div>
          <div className="camp-title">{camp.classTitle}</div>
          <div className="camp-start">{camp.classStart}</div>
        </div>
      </Container>
    </Link>
  );
}

export default CampCard;

// Style
const Container = styled.div<{ bgImg: string }>`
  position: relative;
  height: 280px;
  width: 200px; // TODO: Campsection에서 width가 flexible하지 못한점 수정하기
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  background-position: center;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 8px;

  .camp-main {
    padding: 20px;
    z-index: 1;
    color: white;
  }

  .camp-head {
    ${fonts.Caption}
    padding-bottom: 8px;
  }
  .camp-title {
    ${fonts.Body1}
    font-weight: bold;
    padding-bottom: 8px;
  }
  .camp-start {
    ${fonts.Caption}
  }
`;

const BgOpacityBlack = styled.div`
  position: absolute;
  height: 50%;
  width: 100%;
  left: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(39, 63, 40, 0) 0%,
    rgba(89, 89, 89, 0.558824) 15.62%,
    #000000 70.83%
  );
  border-radius: 0px 0px 10px 10px;
`;
