import styled from 'styled-components';

export const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  padding-top: 60px;
  padding-bottom: 10px;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  justify-content: center;
  padding: 30px 15px;
`;

export const LoadButton = styled.button`
  background-color: #2b3566;
  box-shadow: #9da5d1 2px 3px 10px 3px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: larger;
  height: 40px;
  width: 150px;
`;
