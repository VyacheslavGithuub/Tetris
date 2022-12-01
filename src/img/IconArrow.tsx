import React from "react";

interface IIconArrowProps {
  variant: "left" | "right";
}
export const IconArrow = ({ variant }: IIconArrowProps) => {
  let variantObj = {
    left: "247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153",
    right: "58.65,267.75 175.95,153 58.65,35.7 94.35,0 247.35,153 94.35,306",
  };
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="30px"
      height="30px"
      viewBox="0 0 306 306"
    >
      <g>
        <g>
          <polygon points={variantObj[variant]} />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};
