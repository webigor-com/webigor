import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ButtonProps {
  onClick: () => void;
}

const StyledButton = styled.button`
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
`;

export function Button(props: ButtonProps) {
  return <StyledButton {...props}>Button</StyledButton>;
}

export default Button;
