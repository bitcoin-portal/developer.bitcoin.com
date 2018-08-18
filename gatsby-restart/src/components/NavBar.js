// @flow

import React from 'react';
import styled from 'styled-components'
import {Link } from 'gatsby';

import H2 from 'atoms/H2';
import Text from 'atoms/Text';
import Container from 'components/Container';
import spacing from 'styles/spacing';

import { textBase } from 'atoms/Text';

const Main = styled.div`
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.foreground};
  z-index: 2;
  padding: ${spacing.small2};
`

const NavLayout = styled.div`
  display: flex;
  flex-direction: row;
`

const NavItem = styled(Link)`
  ${textBase};
  color: ${props => props.active ? props.theme.primary : props.theme.background};
  text-decoration: none;
  margin-right: ${spacing.medium};
  &:hover {
    color: ${props => props.theme.secondary};
  }
`

type Props = {
  location: {
    pathname: string,
  },
};

const developBaseUrls = ['/develop', '/bitbox', '/wormhole', '/gui', '/rest'];

class NavBar extends React.PureComponent<Props> {
  render() {
    const {location: { pathname} } = this.props;

    const homeActive = pathname === '/';
    const learnActive = pathname.includes('/learn')
    const developActive = developBaseUrls.reduce((prev, curr) => prev || pathname.includes(curr), false);
    const aboutActive = pathname.includes('/about')

    console.log(pathname);
    console.log('^^')
    return (
      <Main>
        <Container>
            <NavLayout>
              <NavItem to='/' active={homeActive}>Home</NavItem>
              <NavItem to='/learn' active={learnActive}>Learn</NavItem>
              <NavItem to='/develop' active={developActive}>Develop</NavItem>
              <NavItem to='/about' active={aboutActive}>About</NavItem>
            </NavLayout>
        </Container>
      </Main>
    )
  }

}

export default NavBar