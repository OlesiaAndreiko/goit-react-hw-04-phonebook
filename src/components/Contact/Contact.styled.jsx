import styled from 'styled-components';

export const ItemContact = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;
export const BtnDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: #665959;
  background-color: #c6ccd1;
  box-shadow: 0px 1px 1px rgb(0, 0, 0, 15%);
  border-radius: 4px;
  border-color: transparent;

  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus,
  &:active {
    background-color: #665959;
    color: #c6ccd1;
  }
`;
