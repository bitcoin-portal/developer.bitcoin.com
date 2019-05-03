// @flow
import * as React from 'react';

import styled from 'styled-components';
import { Link } from 'gatsby';
import { theme } from 'bitcoincom-storybook';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props =>
    props.isActive ? theme.palette.primary.main : theme.palette.text.link};
  &:hover {
    color: ${theme.palette.text.linkHover};
  }
  display: inline !important;
  line-height: unset !important;
`;

type Props = {
  children: React.Node,
  text?: string,
  to: string,
  href?: string,
  subtle?: ?boolean,
};

const DefaultProps = {
  text: '',
  href: '',
  subtle: false,
};

const StyledA = (props: Props = DefaultProps) => (
  <StyledLink as="a" {...props} />
);

class SmartLink extends React.PureComponent<Props> {
  static defaultProps = DefaultProps;

  render() {
    const { children, text, ...rest } = this.props;
    const { to, href } = rest;

    const patternInternal = /^\/(?!\/)/;
    const patternStaticAsset = /\/static\//g;

    const internal =
      patternInternal.test(to) || patternInternal.test(href || '');
    const isAsset = patternStaticAsset.test(href || '');

    if (isAsset || !internal) {
      return (
        <StyledA href={to || href} target="_blank" {...rest}>
          {text || children}
        </StyledA>
      );
    }

    // Use gatsby-link for internal/app pages, and <a> for external and assets
    return (
      <StyledLink href={to || href} {...rest}>
        {text || children}
      </StyledLink>
    );
  }
}
export { SmartLink };

export default StyledLink;
