import { IHandleMoveProps } from "../../types/handler/handler";

export interface IControlButtonsProps {
  callback: ({ keyCode, repeat }: IHandleMoveProps) => void;
}
