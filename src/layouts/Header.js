import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import { purple, elevation, fixed } from '../utilities';

const Header = ({ className }) => (
  <header className={className}>
    <img src={logo} className="logo" alt="logo" />
  </header>
);

export default styled(Header)`
  background: ${purple};
  padding: 10px 5%;
  width: 100%;
  ${fixed()};
  ${elevation[1]};
  .logo {
    width: 40px;
  }
`;
