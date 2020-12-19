import React from "react";
import {
  Navbar,
  Brand,
  BrandLink,
  Link,
  LinkBelt,
  TextLink
} from "./header.styles";
import * as ROUTES from "../../constants/routes";

type LinkProps = {
  to: string;
};

type TextLinkProps = {
  onClick: () => void;
};

type HeaderComponent = React.FC & {
  Brand: React.FC;
  BrandLink: React.FC;
  LinkBelt: React.FC;
  Link: React.FC<LinkProps>;
  TextLink: React.FC<TextLinkProps>;
};

export const Header: HeaderComponent = ({ children, ...restProps }) => (
  <Navbar {...restProps}>{children}</Navbar>
);

Header.Brand = ({ children, ...restProps }) => (
  <Brand {...restProps}>{children}</Brand>
);

Header.BrandLink = ({ children, ...restProps }) => (
  <BrandLink to={ROUTES.LANDING} {...restProps}>{children}</BrandLink>
);

Header.LinkBelt = ({ children, ...restProps }) => (
  <LinkBelt {...restProps}>{children}</LinkBelt>
);

Header.Link = ({ children, to, ...restProps }) => (
  <Link to={to} {...restProps}>
    {children}
  </Link>
);

Header.TextLink = ({ children, ...restProps }) => (
  <TextLink {...restProps}>{children}</TextLink>
);
