import React, { FormEvent, useContext, useState } from "react";
import { HeaderContainer } from "../containers";
import { Form } from "../components";
import { FormSubmitMethods } from "../constants/html";
import { FirebaseContext, IFirebase } from "../context/firebase";

type LandingProps = {
  isUser: boolean;
};

export const Landing: React.FC<LandingProps> = ({ isUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { firebase } = useContext<IFirebase>(FirebaseContext);

  const handleSignup = (event: FormEvent) => {
    event.preventDefault();

    return firebase!
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        setEmail("");
        setPassword("");
        console.log(error);
      });
  };

  return (
    <HeaderContainer isUser={isUser}>
      <Form>
        <Form.Base onSubmit={handleSignup} method={FormSubmitMethods.POST}>
          <Form.Title>Sign up for Budgetify</Form.Title>
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
          <Form.Submit type="submit">Signup</Form.Submit>
        </Form.Base>
      </Form>
    </HeaderContainer>
  );
};
