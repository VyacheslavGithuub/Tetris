import styled from "styled-components";

const TetrisWrapSC = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  outline: none;
  background-color: ${({ theme }) => theme.main_background};
`;

const TetrisSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  margin: 0 auto;

  .display {
    display: flex;
    justify-content: space-between;
    width: 374px;
  }
`;
const Tetris_Workspace_SC = styled.div`
  border-radius: 15px;
  padding: 15px;
  padding-bottom: 5px;
  background-color: ${({ theme }) => theme.tetris_background};
`;

export const useMainLayoutStyle = () => ({
  TetrisSC,
  TetrisWrapSC,
  Tetris_Workspace_SC,
});
