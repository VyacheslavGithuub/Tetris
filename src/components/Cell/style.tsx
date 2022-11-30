import React from 'react';
import { CellSC } from "./Cell.styles";
import { TETROMINOS } from "../../setup";
import { ICellProps } from "../../types/TComponents/TComponents";

const Cell: React.FC<ICellProps> = ({ type }) => (
  <CellSC type={type} color={TETROMINOS[type].color} />
);

export default React.memo(Cell);