import styled, { keyframes } from "styled-components";

const anim_rotate_one = keyframes`
0%{transform: rotate(-180deg);}
100%{transform: rotate(-360deg);}
`;
const anim_rotate_two = keyframes`
0%{transform: rotate(0deg);}
100%{transform: rotate(-180deg);}
`;

const ControlButtonsSC = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  &:nth-child(1n) {
    fill: ${({ theme }) => theme.arrow_fill};
  }
`;
const CB_Rotate_SC = styled.div<{ rotate: string }>`
  width: 45px;
  height: 45px;
  animation: 1s
    ${({ rotate }) =>
      rotate === "anim1"
        ? anim_rotate_one
        : rotate === "anim2" && anim_rotate_two};
`;
export const useControlButtonsStyle = () => ({
  CB_Rotate_SC,
  ControlButtonsSC,
});
