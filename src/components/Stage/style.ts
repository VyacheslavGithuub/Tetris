import styled from "styled-components";
import { STAGE_WIDTH, STAGE_HEIGHT } from "../../setup";

const StageSC = styled.div`
  width: 373px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(${STAGE_WIDTH}, 30px);
  grid-template-rows: repeat(${STAGE_HEIGHT}, 30px);
  grid-gap: 1px;
  border: 1px solid #222;
  background: ${({ theme }) => theme.Stage_background};
`;

const Stage_Shadow_SC = styled.div<{ gameOver: boolean }>`
  display: ${({ gameOver }) => !gameOver && "none"};
  position: absolute;
  width: 373px;
  height: 620px;
  background: rgba(0, 0, 0, 0.5);
`;

export const useStyledStageStyle = () => ({
  StageSC,
  Stage_Shadow_SC,
});
