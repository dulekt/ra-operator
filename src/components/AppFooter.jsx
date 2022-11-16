//
import React from "react";
import LoginButton from "./LoginButton";
import { Stack } from '@chakra-ui/react'

export default function AppFooter(props) {
  return (
    <Stack direction='row'>

      <LoginButton
      order={props.order}
        isLoggedIn={props.isLoggedIn}
        handleLogin={props.handleLogin}
        handleLogout={props.handleLogout} />
    </Stack>


  );
}