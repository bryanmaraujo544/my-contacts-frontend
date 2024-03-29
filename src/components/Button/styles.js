import styled from 'styled-components';

export default styled.button`
  background: none;
  border: none;
  height: 52px;
  padding: 0 16px;
  background: ${({ theme, isDanger }) =>
    isDanger ? theme.colors.danger.main : theme.colors.primary.main};
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: 700;
  color: #fff;
  border-radius: 4px;
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme, isDanger }) =>
      isDanger ? theme.colors.danger.light : theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme, isDanger }) =>
      isDanger ? theme.colors.danger.dark : theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc !important;
    cursor: default I !important;
  }
`;
