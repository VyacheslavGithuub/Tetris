import { PLAYER } from "./usePlayer";
import { STAGE } from "./useStage";
import { STAGE_WIDTH, STAGE_HEIGHT } from "../setup";
import { TETROMINOS } from "../setup";

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, "clear"]));

export const randomTetromino = () => {
  const tetrominos = [
    "I",
    "J",
    "L",
    "O",
    "S",
    "T",
    "Z",
  ] as (keyof typeof TETROMINOS)[];
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};

export const isColliding = (
  player: PLAYER,
  stage: STAGE,
  { x: moveX, y: moveY }: { x: number; y: number }
) => {
  //Использование циклов for для возможности возврата (и прерывания). Невозможно с forEach
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // 1. Check that we're on an actual Tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          //Проверяем, что наш ход находится внутри высоты игровых площадок (y)
          //Что мы не движемся через нижнюю часть сетки
          !stage[y + player.pos.y + moveY] ||
          //Проверяем, что наш ход находится внутри ширины игровых зон (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          //Убедитесь, что ячейка, к которой мы переходим, не очищена
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }

  //Если все вышеперечисленное неверно
  return false;
};
