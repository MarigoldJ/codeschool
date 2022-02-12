import colors from "@styles/colors";
import fonts from "@styles/fonts";
import { maxWidth } from "@styles/mixin";
import { TypeCamp } from "@utils/type";
import dayjs from "dayjs";
import styled from "styled-components";

import "dayjs/locale/ko";
dayjs.locale("ko");

function TopSection({ camp }: { camp: TypeCamp }) {
  const START_DATE_COMMENT = dayjs(camp.classStart).format(
    "YY.MM.DD(dd) HH:mm부터"
  );

  return (
    <Container camp={camp}>
      <div className="top-bg"></div>
      <div className="top-main">
        <div className="top-left">
          <img
            className="detail-thumbnail"
            src={camp.classThumbnail}
            alt="썸네일"
          />
        </div>
        <div className="top-right">
          <div className="fix">
            <aside className="detail-floating">
              <div>
                <div className="detail-title">{camp.classTitle}</div>
                <div className="detail-category">
                  {camp.category.map((category) => (
                    <CategoryBox key={camp._id + category}>
                      {category}
                    </CategoryBox>
                  ))}
                </div>
                <div className="detail-infos">
                  <div className="detail-info">
                    <div>시작일</div>
                    <div>{START_DATE_COMMENT}</div>
                  </div>
                  <div className="detail-info">
                    <div>수업 과정</div>
                    <div>{`${camp.classPeriod}, 온라인 Live`}</div>
                  </div>
                  <div className="detail-info">
                    <div>정원</div>
                    <div>{`${camp.classStudentCapacity}명 소수정예`}</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default TopSection;

// Style
const Container = styled.div<{ camp: any }>`
  .top-bg {
    z-index: -2;
    position: absolute;
    background-color: ${colors.primary1};
    width: 100%;
    height: 340px;
  }
  .top-main {
    z-index: 10;
    padding-top: 100px;
    ${maxWidth}

    display: flex;
  }
  .top-left {
    flex: 2;
    margin: 0px 12px;
  }
  .top-right {
    flex: 1;
    margin: 0px 12px;
    max-width: 300px;
  }
  .fix {
    position: fixed;
    width: inherit;
    max-width: inherit;
  }

  .detail-thumbnail {
    width: 100%;
    border-radius: 6px;
  }
  .detail-floating {
    padding: 24px;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }

  .detail-category {
    ${fonts.Body1}
    margin-bottom: 8px;
    display: flex;
  }
  .detail-title {
    ${fonts.H2}
    margin-bottom: 8px;
  }
  .detail-info {
    ${fonts.Body2}
    display: flex;
    justify-content: space-between;
  }
`;

const CategoryBox = styled.div`
  ${fonts.Caption}
  margin:0px 4px;
  padding: 4px 6px;

  border-radius: 4px;
  background-color: ${colors.gray5};
`;
