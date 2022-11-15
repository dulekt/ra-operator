//
import React from "react";
import LoginButton from "./LoginButton";

export default function AppFooter(props) {
  return (


    <div class="Header" >


<LoginButton
            isLoggedIn={props.isLoggedIn}
            handleLogin={props.handleLogin}
            handleLogout={props.handleLogout} />
    </div>
  );
  }