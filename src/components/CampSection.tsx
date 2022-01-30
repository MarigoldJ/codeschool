import fonts from "@styles/fonts";
import { maxWidth } from "@styles/mixin";
import { TypeCamp } from "@utils/type";
import styled from "styled-components";
import CampCard from "@components/CampCard";

type IProps = {
  title: string;
  camps: TypeCamp[];
};

function CampSection({ title, camps }: IProps) {
  return (
    <Container>
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
const Container = styled.section`
  ${maxWidth}

  padding: 0px 16px 40px;

  .camp-section-title {
    ${fonts.H1}
    padding-bottom: 8px;
  }
  .camp-section-cards {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  a {
    flex: 1;
  }
`;
