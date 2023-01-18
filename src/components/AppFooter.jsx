//
import React from "react";
import LoginButton from "./LoginButton";
import { Container } from "@chakra-ui/react";

//todo back button
export default function AppFooter(props) {
  return (
    <Container align={"center"}>
      <LoginButton
        size="sm"
        order={props.order}
        isLoggedIn={props.isLoggedIn}
        handleLogin={props.handleLogin}
        handleLogout={props.handleLogout}
      />
    </Container>
  );
}
