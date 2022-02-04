import fonts from "@styles/fonts";
import { maxWidth } from "@styles/mixin";
import { TypeCamp } from "@utils/type";
import styled, { css } from "styled-components";
import CampCard from "@components/CampCard";
import { useContext } from "react";
import { MobileContext } from "@context/MobileContext";

type IProps = {
  title: string;
  camps: TypeCamp[];
};

function CampSection({ title, camps }: IProps) {
  const { isMobile } = useContext(MobileContext);

  return (
    <Container isMobile={isMobile}>
      <div className="camp-section-title">{title}</div>
      <div className="camp-section-cards">
        {camps.map((camp, index) => (
          <CampCard key={index} camp={camp} />
        ))}
      </div>
    </Container>
  );
}

export default CampSection;

// Style
const Container = styled.section<{ isMobile: boolean }>`
  ${maxWidth}

  padding: 0px 16px 40px;

  .camp-section-title {
    ${fonts.H1}
    padding-bottom: 8px;
  }
  .camp-section-cards {
    a {
      flex: 1;
    }

    ${(props) =>
      !props.isMobile &&
      css`
        display: flex;
        justify-content: space-between;
        gap: 16px;
      `}
  }
`;
