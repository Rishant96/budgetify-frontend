import React from "react";
import { HeaderContainer, ManageContainer } from "../containers";

type HomeProps = {
  isUser: boolean;
  userEmail: string;
};

export const Home: React.FC<HomeProps> = ({ isUser, userEmail }) => (
  <>
    <HeaderContainer isUser={isUser} />
    <ManageContainer userEmail={userEmail} />
  </>
);
