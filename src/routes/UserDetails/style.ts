import styled from 'styled-components';

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  padding: 100px 30px 0;
  width: 90%;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }
`

export const Card = styled.div`
  align-items: center;
  background-color: #2b3566;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: center;
  padding: 2rem;

  div:last-child {
    margin-left: 10px;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  border: 4px solid #644aff;
  height: 200px;
`;

export const Location = styled.p`
  align-items: center;
  display: flex;
  gap: 0.4rem;

  svg {
    fill: #4ed8c7;
    font-size: 1.5rem;
  }

  span {
    color: #9da5d1;
    font-weight: bold;
  }
`;

export const Stats = styled.div`
  display: flex;

  div {
    flex-direction: column;
    gap: 0.4rem;
    padding: 0 1rem;

    p:last-child {
      align-self: center;
      background-color: #4ed8c7;
      border-radius: 3px;
      padding: 0.2rem 0.4rem;
      margin-top: 10px;
    }
  }

  div:first-child {
    border-right: 1px solid #9da5d1;
  }
`;
