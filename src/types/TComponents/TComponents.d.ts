import { TETROMINOS } from "../../hooks/setup";

export type STAGECELL = [keyof typeof TETROMINOS, string];
export type STAGE = STAGECELL[][];

export interface IStageProps {
  stage: STAGE;
  gameOver: boolean;
  startGame: () => void;
}
export interface ICellProps {
  type: keyof typeof TETROMINOS;
  color?: string;
}
export interface IDisplayProps {
  gameOver?: boolean;
  text: string;
}
export interface IStartButtonProps {
  callback: () => void;
}
