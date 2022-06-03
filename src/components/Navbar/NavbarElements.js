import styled from 'styled-components';
import { Link } from 'react-router-dom';
import img from './px-shower.jpg';

export const Nav = styled.nav`
  height: 100px;
  text-align: center;
  padding: 20px 35px;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    height: 70px;
  }
`;

export const NavContainer = styled.div`
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 15px;
  max-width: 1100px;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const NavLogo = styled(Link)`
  font-family: 'Fadetta';
  color: #992800;
  text-align: center;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15%;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding-top: 20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;
