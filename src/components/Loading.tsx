import styled, { keyframes } from "styled-components";

interface SpinnerProps {
  size?: string;
  color?: string;
  borderWidth?: string;
}

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div<SpinnerProps>`
  width: ${({ size }) => size || "40px"};
  height: ${({ size }) => size || "40px"};
  border-radius: 50%;
  border: ${({ borderWidth }) => borderWidth || "5px"} solid
    ${({ color }) => color || "#f3f3f3"};
  border-top-color: ${({ color }) => color || "#3498db"};
  margin: auto;
  animation: ${spin} 1s linear infinite;
`;

const Spinner = ({ size, color, borderWidth }: SpinnerProps) => (
  <SpinnerWrapper size={size} color={color} borderWidth={borderWidth} />
);

export default Spinner;
