import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Frame,
  Title,
  Item,
  Header,
  Body,
  Toolbelt,
  Row,
  Link
} from "./accordion.styles";
import * as ROUTES from '../../constants/routes';
import axios from "axios";
import { URL_BUDGETS } from "../../constants/backend";

const ToggleContext = createContext<any>(null);

type RowProps = {
  entry: { _id: string; title: string; amount: number };
};

type AccordionComponent = React.FC & {
  Title: React.FC;
  Frame: React.FC;
  Item: React.FC;
  Header: React.FC;
  Body: React.FC<{id: string}>;
  Row: React.FC<RowProps>;
  Add: React.FC;
};

export const Accordion: AccordionComponent = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, id, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  return (
    <Body className={toggleShow ? "open" : "closed"} {...restProps}>
      <span>{children}</span>
      <Toolbelt>
        <Link to={ROUTES.CHARTS + `/${id}`}>
          <img src="/images/chart.png" alt="Charts" />
        </Link>
        <div>
          <Link to={ROUTES.CREATOR + `/${id}`}>
            <img src="/images/edit.png" alt="Edit" />
          </Link>
          <img onClick={() => {axios.delete(URL_BUDGETS + `/${id}`)}} src="/images/trash.png" alt="Delete" />
        </div>
      </Toolbelt>
    </Body>
  );
};

Accordion.Row = ({ children, entry, ...restProps }) => (
  <Row>
    <p className="item">{entry.title}</p>
    <span>-</span>
    <p className="amount">
      ${String("         " + entry.amount.toFixed(2)).slice(-9)}
    </p>
  </Row>
);

Accordion.Add = ({ ...restProps }) => 
(
  <Link to={ROUTES.CREATOR}>
    <Header className="insert">
      <span>+</span>
    </Header>
  </Link>
);
