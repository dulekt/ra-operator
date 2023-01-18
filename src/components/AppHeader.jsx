//AppHeader.jsx
import React from "react";
import { Heading, Image, Stack } from "@chakra-ui/react";
import RAlogo from "../assets/images/RA_Logo_Bug-LeftText_rgb.png";
import { Button } from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";
export default function AppHeader(props) {
  return (
    <>
      <Stack
        direction="row"
        //width="100%"
      >
        {props.isLoggedIn && (
          <Button
            leftIcon={<MdArrowBack />}
            colorScheme="blackAlpha"
            variant="outline"
            size="sm"
            onClick={props.back}
          >
            Wróć
          </Button>
        )}
        <Image height="37px" src={RAlogo} alt="RA_logo" />{" "}
        <Heading size="md">System zamawiania etykiet </Heading>
      </Stack>
    </>
  );
}
