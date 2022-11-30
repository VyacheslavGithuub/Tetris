import React from "react";
import { ThemeProvider } from "styled-components";
import ControlButtons from "../components/ControlButtons/ControlButtons";
import Display from "../components/Display/Display";
import Settings from "../components/Settings/Settings";
import Stage from "../components/Stage/Stage";
import StartButton from "../components/StartButton/StartButton";
import { useAppSelector } from "../redux/hooks";
import { useMainLayoutStyle } from "./style";
import { useMainLayout } from "./useMainLayout";

const MainLayout = () => {
  const ThemObj = useAppSelector((state) => state.theme);

  const { TetrisSC, TetrisWrapSC, Tetris_Workspace_SC } = useMainLayoutStyle();
  const {
    move,
    keyUp,
    score,
    rows,
    level,
    stage,
    gameArea,
    gameOver,
    handleStartGame,
  } = useMainLayout();

  return (
    <ThemeProvider theme={ThemObj}>
      <TetrisWrapSC
        role="button"
        tabIndex={0}
        onKeyDown={move}
        onKeyUp={keyUp}
        ref={gameArea}
      >
        <Settings />
        <TetrisSC>
          <Tetris_Workspace_SC>
            <div className="display">
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </div>
            <Stage
              stage={stage}
              startGame={handleStartGame}
              gameOver={gameOver}
            />
            <ControlButtons />
          </Tetris_Workspace_SC>
        </TetrisSC>
      </TetrisWrapSC>
    </ThemeProvider>
  );
};

export default React.memo(MainLayout);
