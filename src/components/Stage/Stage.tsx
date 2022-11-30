import React from 'react';
import Cell from "../Cell/style";
import StartButton from "../StartButton/StartButton";
import { useStyledStageStyle } from "./style";
import { IStageProps } from "../../types/TComponents/TComponents";

const Stage: React.FC<IStageProps> = ({ stage, startGame, gameOver }) => {
  const { StageSC, Stage_Shadow_SC } = useStyledStageStyle();

  return (
    <StageSC>
      {gameOver && <StartButton callback={startGame} />}
      <Stage_Shadow_SC gameOver={gameOver} />
      {stage.map((row) =>
        row.map((cell, x) => <Cell key={x} type={cell[0]} />)
      )}
    </StageSC>
  );
};


export default Stage;