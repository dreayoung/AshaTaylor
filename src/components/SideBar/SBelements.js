import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #fff9ed;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #992800;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.8rem;
  right: 1.5rem;
  background: transparent;
  cursor: pointer;
  outline: none;
`;

// export const SidebarWrapper = styled.div`
//   background: red;
// `;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  } ;
`;
export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Fairleaders;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: black;
  cursor: pointer;

  &:hover {
    color: #992800;
    transition: 0.2s ease-in-out;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 50px;
  margin-top: 120px;
`;

export const ContactIcon = styled.img`
  width: 10%;
`;