//
import React from "react";
import LoginButton from "./LoginButton";
import { Container, HStack, Box } from "@chakra-ui/react";

export default function AppFooter(props) {
  return (
    <Container align={props.isLoggedIn ? "left" : "center"}>
      <LoginButton
        order={props.order}
        isLoggedIn={props.isLoggedIn}
        handleLogin={props.handleLogin}
        handleLogout={props.handleLogout}
      />
    </Container>
  );
}
