import React, { useContext } from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";

type HeaderContainerProps = {
  isUser: boolean;
  isLogin?: boolean;
};

export const HeaderContainer: React.FC<HeaderContainerProps> = ({
  children,
  isUser,
  isLogin = false,
  ...restProps
}) => {
  const { firebase } = useContext(FirebaseContext);

  const link = !isUser ? (
    isLogin ? (
      <Header.Link to={ROUTES.LANDING}>Sign Up</Header.Link>
    ) : (
      <Header.Link to={ROUTES.SIGN_IN}>Login</Header.Link>
    )
  ) : (
    <>
      <Header.Link to={ROUTES.HOME}>Home</Header.Link>
      <Header.TextLink
        onClick={() => {
          firebase!.auth().signOut();
        }}
      >
        Logout
      </Header.TextLink>
    </>
  );

  return (
    <>
      <Header>
        <Header.Brand>
          <Header.BrandLink>Budgetify</Header.BrandLink>
        </Header.Brand>
        <Header.LinkBelt>{link}</Header.LinkBelt>
      </Header>
      {children}
    </>
  );
};
