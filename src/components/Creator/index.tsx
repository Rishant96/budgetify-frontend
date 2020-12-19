import React, { FormEvent } from "react";

import {
  Container,
  Base,
  Entry,
  Name,
  Field,
  Dropdown,
  DropDownHeader,
  DropdownList,
  ListItem,
  SmallContainer,
  Insert,
  Submit
} from "./creator.styles";

type EntryProps = {
  type?: string;
  placeholder?: string;
  step?: string;
  name?: string;
  min?: string;
  max?: string;
  value?: any;
  onChange?: any;
};

type CreatorComponent = React.FC & {
  Base: React.FC<{ handleSubmit: (e: FormEvent) => void }>;
  Field: React.FC;
  Entry: React.FC<EntryProps>;
  Name: React.FC;
  Dropdown: React.FC;
  DropDownHeader: React.FC;
  DropdownList: React.FC;
  ListItem: React.FC;
  SmallContainer: React.FC;
  Insert: React.FC;
  Submit: React.FC;
};

export const Creator: CreatorComponent = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

Creator.Base = ({ children, handleSubmit, ...restProps }) => (
  <Base onSubmit={handleSubmit} {...restProps}>
    {children}
  </Base>
);

Creator.Field = ({ children, ...restProps }) => (
  <Field {...restProps}>{children}</Field>
);

Creator.Name = ({ children, ...restProps }) => (
  <Name {...restProps}>{children}</Name>
);

Creator.Entry = ({ ...restProps }) => <Entry {...restProps} />;

Creator.Dropdown = ({ children, ...restProps }) => (
  <Dropdown {...restProps}>{children}</Dropdown>
);

Creator.DropDownHeader = ({ children, ...restProps }) => (
  <DropDownHeader {...restProps}>{children}</DropDownHeader>
);

Creator.DropdownList = ({ children, ...restProps }) => (
  <DropdownList {...restProps}>{children}</DropdownList>
);

Creator.ListItem = ({ children, ...restProps }) => (
  <ListItem {...restProps}>{children}</ListItem>
);

Creator.SmallContainer = ({ children, ...restProps }) => (
  <SmallContainer {...restProps}>{children}</SmallContainer>
);

Creator.Insert = ({ ...restProps }) => <Insert {...restProps} />;

Creator.Submit = ({ children, ...restProps }) => (
  <Submit type="submit" {...restProps}>
    {children}
  </Submit>
);
