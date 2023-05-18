import styled from 'styled-components';

export const Card = styled.div`
  align-items: center;
  display: flex;
  width: 250px;
  height: 300px;
`;

export const CardInner = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
  transform: rotateY(180deg);
`;

export const CardFaceFront = styled.div`
  background-image: linear-gradient(to bottom right, #2b3566, #0e1129);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardFaceBack = styled.div`
  background-color: #f3f3f3;
  transform: rotateY(180deg);
`;

export const CardContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const CardHeader = styled.div`
  position: relative;
  padding: 30px 30px 40px;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      to bottom left,
      #2b3566 10%,
      #0e1129 115%
    );
    z-index: -1;
    border-radius: 0px 0px 50% 0px;
  }
`;
export const Profile = styled.img`
  display: block;
  width: 55%;
  margin: 10px auto;
  border-radius: 50%;
  background-color: #fff;
  object-fit: cover;
`;

export const CardHeaderH2 = styled.h2`
  font-size: 16px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
`;

export const CardBody = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 30px;
`;

export const CardBodyH3 = styled.h3`
  color: #212121;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
`;
