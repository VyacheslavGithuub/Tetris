import React, { useState } from "react";
import { IconArrow } from "../../img/IconArrow";
import { IHandleMoveProps } from "../../types/handler/handler";
import { IconArrowDown } from "../../img/IconArrowDown";
import { IconRotate } from "../../img/IconRotate";
import { useControlButtonsStyle } from "./style";
import { useControlButtons } from "./useControlButtons";
import { IControlButtonsProps } from "./types";

const ControlButtons = ({ callback }: IControlButtonsProps) => {
  const { ControlButtonsSC, CB_Rotate_SC } = useControlButtonsStyle();
  const { rotate, handleRotate, handleArrowLeft, handleArrowRight } =
    useControlButtons({ callback });

  return (
    <ControlButtonsSC>
      <CB_Rotate_SC rotate={rotate} onClick={handleRotate}>
        <IconRotate />
      </CB_Rotate_SC>

      <div>
        <IconArrowDown />
      </div>

      <div onClick={handleArrowLeft}>
        <IconArrow variant="left" />
      </div>
      <div onClick={handleArrowRight}>
        <IconArrow variant="right" />
      </div>
    </ControlButtonsSC>
  );
};

export default ControlButtons;
