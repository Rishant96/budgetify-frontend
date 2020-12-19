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
        <img src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/close-512.png" alt="Close" />
      ) : (
        <img src="https://e7.pngegg.com/pngimages/781/45/png-clipart-plus-plus.png" alt="Open" />
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
          <img src="https://png.pngtree.com/png-vector/20190330/ourmid/pngtree-vector-bar-chart-icon-png-image_894652.jpg" alt="Charts" />
        </Link>
        <div>
          <Link to={ROUTES.CREATOR + `/${id}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Feedbin-Icon-home-edit.svg/1200px-Feedbin-Icon-home-edit.svg.png" alt="Edit" />
          </Link>
          <img onClick={() => {axios.delete(URL_BUDGETS + `/${id}`)}} src="https://lh3.googleusercontent.com/proxy/HRP1N7kwq-1DoPbHYFiiZ4AUlq5cIqWsbquo0eZ455zQbjMW7k1rMGI2hugX1EQznUJhaeuTh9Nxj52KFIqr0Tym5NBHAiEnibJCAG7HPfX3xlXPUbzX1FVI0O6hu52MmC_t" alt="Delete" />
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
