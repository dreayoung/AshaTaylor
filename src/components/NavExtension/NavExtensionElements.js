import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const Card = styled.div`
  background: #874100;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 50px;
  height: 300px;
  width: 200px;
  padding: 80px;
  // box-shadow: 0 2px 3px rgba(2, 3.2, 0, 0.2);
  // box-shadow: 0 2px 2px #992800;
  box-shadow: 0px 6px 5px #874100;
  transition: all 0.2s ease-in-out;
`;

export const PageH1 = styled.div`
  font-size: 2.5rem;
  color: black;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const NavLink = styled(Link)`
background: #874100;
  font-family: Luckiest Guy;
  text-decoration: none;
  color: white;
  padding: 50px;
  letter-spacing: 2px;
`;
