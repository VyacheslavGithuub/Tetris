import React from 'react';
import { IconPlay } from "../../img/IconPlay";
import { IStartButtonProps } from "../../types/TComponents/TComponents";
import { StyledStartButton } from "./StartButton.styles";

const StartButton: React.FC<IStartButtonProps> = ({ callback }) => (
  <StyledStartButton onClick={callback}>
    <IconPlay />
  </StyledStartButton>
);

export default StartButton;
