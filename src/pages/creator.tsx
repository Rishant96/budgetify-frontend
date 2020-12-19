import React from "react";
import { EditorContainer, HeaderContainer } from "../containers";

type CreatorProps = {
  isUser: boolean;
  userEmail: string;
};

export const Creator: React.FC<CreatorProps> = ({
  children,
  isUser,
  userEmail,
  ...restProps
}) => (
  <>
    <HeaderContainer isUser={isUser} />
    <EditorContainer userEmail={userEmail} />
  </>
);
