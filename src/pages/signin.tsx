import React, { FormEvent, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { HeaderContainer } from "../containers";
import { Form } from "../components";
import { FormSubmitMethods } from "../constants/html";
import { FirebaseContext, IFirebase } from "../context/firebase";
import * as ROUTES from '../constants/routes';

type SigninProps = {
  isUser: boolean;
};

export const Signin: React.FC<SigninProps> = ({ isUser }) => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { firebase } = useContext<IFirebase>(FirebaseContext);

  const handleSignin = (event: FormEvent) => {
    event.preventDefault();

    return firebase!
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.HOME);
      })
      .catch(error => {
        setEmail("");
        setPassword("");
        console.log(error);
      });
  };

  return (
    <HeaderContainer isUser={isUser} isLogin={true}>
      <Form>
        <Form.Base onSubmit={handleSignin} method={FormSubmitMethods.POST}>
          <Form.Title>Sign in to Budgetify</Form.Title>
          <Form.Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Input
            type="password"
            placeholder="Password"
            value={password}
            autocomplete="off"
            onChange={e => setPassword(e.target.value)}
          />
          <Form.Submit type="submit">Login</Form.Submit>
        </Form.Base>
      </Form>
    </HeaderContainer>
  );
};
