import styled from "styled-components/macro";
import {
  fontDark,
  fontLight,
  navbarHeight,
  primary
} from "../../constants/styling";
import { Link as ReachRouterLink } from "react-router-dom";

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  min-height: ${navbarHeight};
  background-color: ${primary};
  margin-bottom: 50px;
`;

export const Brand = styled.h1`
  font-family: "Josefin Sans", sans-serif;
  font-size: 32px;
`;

export const BrandLink = styled(ReachRouterLink)`
  color: ${fontLight};
  text-decoration: none;
  cursor: pointer;
`;

export const LinkBelt = styled.div`
  font-family: "Rubik", sans-serif;
  color: ${fontDark};
  font-size: 18px;
  min-height: ${navbarHeight};
  display: flex;
  align-items: center;
`;

const linkStyles = `
  padding: 10px 13px;
  border-radius: 18px;
  border: 1px solid transparent;
  text-decoration: none;
  color: white;

  &:hover {
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.07);
    cursor: pointer;
    font-weight: 450;
  }
`;

export const Link = styled(ReachRouterLink)`${linkStyles}`;

export const TextLink = styled.p`${linkStyles}`;
