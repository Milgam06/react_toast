import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { SubjectProps } from "./choice";

const FadeIn = keyframes`
  from {
    width: 50vw;
  }
  to {
    width: 80vw;
  }
`;

export const Screen = styled.div`
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChoiceTitleContainer = styled.div`
  position: absolute;
  margin-bottom: 40rem;
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 2;
`;

export const ChoiceTitle = styled.span`
  font-size: 20rem;
  font-weight: 500;
`;

export const SubjectContainer = styled.div`
  position: relative;
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`;

export const Subject = styled.div<SubjectProps>`
  width: 50vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${(props) => props.back_colors};
  border: 1px solid red;
  &:hover {
    background-color: white;
    animation: ${FadeIn} 0.3s ease-in-out forwards;
  }
`;

export const SubjectTitle = styled.span`
  margin-bottom: 15rem;
`;
