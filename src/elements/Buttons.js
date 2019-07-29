import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { teal, elevation } from '../utilities';

const BUTTON_MODIFIERS = {
  small: () => `
    font-size: 1rem;
    padding: 3px 10px;
  `,
  cancel: ({theme}) => `
    background: ${theme.colors.secondary};
  `
};

export const Button = styled.button`
  padding: 5px 20px;
  border-radius: 4px;
  border: none;
  color: white;
  font-size: 2rem;
  background: ${props => props.theme.colors.primary};
  transition: 0.3s ease box-shadow;
  ${elevation[1]};
  &:hover {
    ${elevation[2]};
  }
  /* ${({ size }) => {
    if (size === 'small') {
      return `
        font-size: 1rem;
        padding: 3px 10px;
      `;
    }
  }}
  ${({ type }) => {
    if (type === 'cancel') {
      return `
        background: tomato;
      `;
    }
  }} */

  // Replace by
  ${applyStyleModifiers(BUTTON_MODIFIERS)}

`;

export const CancelButton = styled(Button)`
  background: tomato;
`;

