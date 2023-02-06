import styled from 'styled-components';

export const FilerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 15px;
  width: 538px;
  height: 90px;
  padding: 20px;
  border: 2px solid #2196f3;
  box-shadow: 0px 4px 4px rgb(0, 0, 0, 15%);
`;

export const FieldCaption = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const ContactInput = styled.input`
  display: block;
  width: 430px;
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
