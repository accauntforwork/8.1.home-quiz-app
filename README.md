# Quiz App by Muhammadqodir

[Source video](https://www.youtube.com/watch?v=F2JCjVSZlG0&list=PL41PQx5PPbt6OheJQkg-QNROfx9j75MuR&ab_channel=freeCodeCamp.org)

How to clone this repository

```bash
git clone https://github.com/accauntforwork/8.1.home-quiz-app.git

npm i
# or
npm install

npm run dev
```

what i added
Loading with [styled-components](https://styled-components.com/)

Loading

```tsx
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
  border: ${({ borderWidth }) => borderWidth || "5px"} solid ${({ color }) =>
      color || "#f3f3f3"};
  border-top-color: ${({ color }) => color || "#3498db"};
  margin: auto;
  animation: ${spin} 1s linear infinite;
`;

const Spinner = ({ size, color, borderWidth }: SpinnerProps) => (
  <SpinnerWrapper size={size} color={color} borderWidth={borderWidth} />
);

export default Spinner;
```
