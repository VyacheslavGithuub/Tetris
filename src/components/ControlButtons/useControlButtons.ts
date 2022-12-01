import React, { useState } from "react";
import { IControlButtonsProps } from "./types";

export const useControlButtons = ({ callback }: IControlButtonsProps) => {
  const [rotate, setRotate] = useState<string>("anim1");

  const handleRotate = () => {
    if (rotate === "anim1") {
      setRotate("anim2");
    } else {
      setRotate("anim1");
    }
    callback({ keyCode: 38 });
  };
  const handleArrowLeft = () => callback({ keyCode: 37 });
  const handleArrowRight = () => callback({ keyCode: 39 });

  return { rotate, handleRotate, handleArrowLeft, handleArrowRight };
};
