import React from 'react';
import { IDisplayProps } from "../../types/TComponents/TComponents";
import { DisplaySC } from "./style";

const Display: React.FC<IDisplayProps> = ({ gameOver, text }) => (
  <DisplaySC gameOver={gameOver}>{text}</DisplaySC>
);

export default Display;
