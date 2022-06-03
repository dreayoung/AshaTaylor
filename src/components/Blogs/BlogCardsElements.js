import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;

  // @media screen and (max-width: 768px) {
  //   height: 100px;
  // }

  // @media screen and (max-width: 480px) {
  //   height: 1300px;
  // }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 20px;
  }
`;

export const Card = styled(Link)`
  // background: #0099;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 300px;
  width: 200px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
`;

export const Title = styled.div`
  text-align: center;
  color: black;
  font-size: 1.3rem;
  // border-bottom: 1px solid black;
  // padding-bottom: 10px;
`;

export const FeatureImg = styled.img`
  width: 100%;
  height: 60%;
  padding-top: 10px;
`;
