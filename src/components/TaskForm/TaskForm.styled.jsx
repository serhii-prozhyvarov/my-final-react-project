import styled from '@emotion/styled';

export const TaskFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  border: solid 1px #000000;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 30px;
`;

export const Input = styled.input`
  font-family: 'Montserrat', sans-serif;
  color: #000000;
  font-size: 14px;
  display: block;
  margin: 15px;
  border: 1px solid gray;
  width: 80%;
  height: 20px;
  padding: 10px;
  border-radius: 20px;
`;