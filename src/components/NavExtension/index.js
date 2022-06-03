import React from 'react';
import {
  NavContainer,
  // PageH1,
  Wrapper,
  Card,
  NavLink,
} from './NavExtensionElements';

const NavExtension = () => {
  return (
    <NavContainer>
      {/* <PageH1>Blog</PageH1> */}
      <Wrapper>
        <Card>
          <NavLink to="/blogs">BLOGS</NavLink>
        </Card>
        <Card>
          <NavLink to="/portfolio">PORTFOLIO</NavLink>
        </Card>
        <Card>
          <NavLink to="/podcast">PODCAST</NavLink>
        </Card>
      </Wrapper>
    </NavContainer>
  );
};

export default NavExtension;
