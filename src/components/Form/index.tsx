import React from "react";
import { ChangeEvent } from "react";
import { FormEvent } from "react";
import {
  Container,
  Error,
  Base,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit
} from "./form.styles";
import { FormSubmitMethods } from "../../constants/html";

type CommonProps = {};

type BaseProps = CommonProps & {
  onSubmit: (event: FormEvent) => void;
  method: FormSubmitMethods;
};

type InputProps = CommonProps & {
  placeholder?: string;
  type?: string;
  value: string;
  autocomplete?: "off" | "on";
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

type SubmitProps = CommonProps & {
  type?: "button" | "submit" | "reset" | undefined;
  onChange?: (event: FormEvent<HTMLButtonElement>) => void;
};

type FormComponent = React.FC & {
  Error: React.FC;
  Base: React.FC<BaseProps>;
  Title: React.FC;
  Text: React.FC;
  TextSmall: React.FC;
  Link: React.FC;
  Input: React.FC<InputProps>;
  Submit: React.FC<SubmitProps>;
};

export const Form: FormComponent = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};
