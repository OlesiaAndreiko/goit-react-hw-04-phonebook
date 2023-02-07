import styled from 'styled-components';

export const Form = styled.form.attrs({ autoComplete: 'off' })`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 15px;
  width: 538px;
  height: 280px;
  padding: 20px;
  border: 2px solid #2196f3;
  box-shadow: 0px 4px 4px rgb(0, 0, 0, 15%);
`;

export const BtnContact = styled.button.attrs({ type: 'submit' })`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  font-family: inherit;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: #fff;
  background-color: #2196f3;
  box-shadow: 0px 4px 4px rgb(0, 0, 0, 15%);
  border-radius: 4px;
  border-color: transparent;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #188ce8;
  }
`;

export const FieldCaption = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const ContactInput = styled.input`
  display: block;
  width: 513px;
  height: 20px;
  padding: 12px;
  font-size: 20px;
  color: #757575;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  outline: rgba(0, 0, 0, 0);
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border-color: #2196f3;
  }
`;