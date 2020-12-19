import styled from "styled-components/macro";
import {
  primary,
  fontDark,
  fontLight,
  secondary,
  backgroundGrey,
  backgroundDarkGrey,
  fontForm
} from "../../constants/styling";
import { Link as ReachRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
`;

export const Frame = styled.div`
  margin-bottom: 40px;
  width: 100%;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 35px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: ${fontLight};
  text-align: center;
`;

export const Item = styled.div`
  color: #737373;
  margin: auto;
  margin-bottom: 10px;
  max-width: 728px;
  width: 100%;

  &:first-of-type {
    margin-top: 3em;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background: ${backgroundGrey};
  padding: 0.75em 1.2em 0.75em 1.2em;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(0.4);
    width: 24px;
    user-select: none;
  }

  img:hover {
    filter: invert(0.25);
  }

  &.insert {
    background-color: #e6fff2;
    padding: 0;
    margin-top: 10px;
  }

  &.insert:hover {
    background-color: #d7f9e8;
  }

  &.insert span {
    width: 100%;
    text-align: center;
    color: green;
    font-size: 32px;
  }
`;

export const Body = styled.div`
  font-size: 22px;
  font-weight: normal;
  line-height: normal;
  background: ${backgroundDarkGrey};
  white-space: pre-wrap;
  user-select: none;
  overflow: hidden;

  &.closed {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }
  &.open {
    max-height: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }

  span {
    display: block;
    padding: 0.8em 2.2em 0.8em 1.2em;
  }
`;

export const Toolbelt = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  width: inherit;
  margin: 5px 15px;

  img {
    max-width: 22px;
    margin: 8px;
    cursor: pointer;
  }

  img:hover {
    filter: brightness(0.8);
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  span {
    flex-grow: 1;
    text-align: center;
  }

  p {
    width: 100px;
  }

  p.item {
  }

  p.amount {
  }
`;

export const Link = styled(ReachRouterLink)`
  text-decoration: none;
`;
