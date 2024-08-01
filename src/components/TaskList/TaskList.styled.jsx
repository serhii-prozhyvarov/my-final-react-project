import styled from '@emotion/styled';

export const TaskListActiveWrapper = styled.div`
  min-width: 200px;
  border-radius: 30px;
  margin-bottom: 10px;
  background-color: #fad106;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px #000000;
`;

export const TaskListInactiveWrapper = styled.div`
  min-width: 200px;
  border-radius: 50px;
  margin-bottom: 10px;
  background-color: #dcedf7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px #000000;
`;

export const AddButton = styled.button`
  cursor: pointer;
  margin-bottom: 10px;
  min-width: 80px;
  font-family: 'Montserrat', sans-serif;
  background-color: #4aa412;
  padding: 5px;
  border-radius: 10px;
  border: none;
  font-size: 17px;
  color: #ffffff;
  font-weight: 700;
  border: solid 1px #000000;
`;

export const TaskListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

export const DeleteButton = styled.div`
  cursor: pointer;
  text-align: center;
  margin-bottom: 10px;
  min-width: 20px;
  font-family: 'Montserrat', sans-serif;
  background-color: #ce2929;
  padding: 4px;
  border-radius: 8px;
  border: none;
  font-size: 15px;
  color: #ffffff;
  font-weight: 700;
  border: solid 1px #000000;
`;
