import { maxWidth } from "@styles/mixin";
import { TypeCamp } from "@utils/type";
import styled from "styled-components";

function BottomSection({ camp }: { camp: TypeCamp }) {
  return (
    <Container>
      <div className="bottom-main">
        <div className="bottom-left">{"\n".repeat(100)}</div>
        <div className="bottom-right"></div>
      </div>
    </Container>
  );
}

export default BottomSection;

// Style
const Container = styled.div`
  .bottom-main {
    ${maxWidth}
    display: flex;
  }

  .bottom-left {
    flex: 2;
    margin: 0px 12px;
    white-space: pre-wrap;
  }
  .bottom-right {
    flex: 1;
    margin: 0px 12px;
  }
`;
