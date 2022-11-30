import React from 'react';
import { createStage } from "./gameHelpers";
import type { PLAYER } from "./usePlayer";

export type STAGECELL = [string | number, string];
export type STAGE = STAGECELL[][];

export const useStage = (player: PLAYER, resetPlayer: () => void) => {
  const [stage, setStage] = React.useState(createStage());
  const [rowsCleared, setRowsCleared] = React.useState(0);

  React.useEffect(() => {
    if (!player.pos) return;

    setRowsCleared(0);

    const sweepRows = (newStage: STAGE): STAGE => {
      return newStage.reduce((ack, row) => {
        //Если мы не находим 0, это означает, что строка заполнена и должна быть очищена.
        if (row.findIndex((cell) => cell[0] === 0) === -1) {
          setRowsCleared((prev) => prev + 1);
          //Создайте пустую строку в начале массива, чтобы сдвинуть тетромино вниз
          //вместо возврата очищенной строки
          ack.unshift(
            new Array(newStage[0].length).fill([0, "clear"]) as STAGECELL[]
          );
          return ack;
        }

        ack.push(row);
        return ack;
      }, [] as STAGE);
    };

    const updateStage = (prevStage: STAGE): STAGE => {
      //Сначала чистим сцену
      //Если написано "очистить", но нет 0, это означает, что это ход игроков и его нужно очистить
      const newStage = prevStage.map(
        (row) =>
          row.map((cell) =>
            cell[1] === "clear" ? [0, "clear"] : cell
          ) as STAGECELL[]
      );

      // Затем нарисуем тетромино
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });

      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }

      return newStage;
    };

    setStage((prev) => updateStage(prev));
  }, [player.collided, player.pos?.x, player.pos?.y, player.tetromino]);

  return { stage, setStage, rowsCleared };
};
