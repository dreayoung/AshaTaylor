import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  // SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  ContactInfo,
  ContactIcon
} from './SBelements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      {/* <SidebarWrapper> */}
      <SidebarMenu>
        <SidebarLink to="about">About</SidebarLink>
        <SidebarLink to="blogs">Blogs</SidebarLink>
        <SidebarLink to="portfolio">Portfolio</SidebarLink>
        <ContactInfo>
          <ContactIcon src={process.env.PUBLIC_URL + 'icons8-instagram (1).svg'} />
          <ContactIcon src={process.env.PUBLIC_URL + 'icons8-youtube-logo.svg'} />
          <ContactIcon src={process.env.PUBLIC_URL + 'icons8-mail.svg'} />
        </ContactInfo>
      </SidebarMenu>
      {/* </SidebarWrapper> */}
    </SidebarContainer>
  );
};

export default Sidebar;
