//AppHeader.jsx
import React from "react";
import { Image, Stack } from '@chakra-ui/react'

export default function AppHeader() {
  return (


    <Stack direction='row'>
      <Image
        boxSize='100px'
        src='assets\images\RA_Logo_Bug-LeftText_rgb.png'
        alt='RA_logo'
      />
      <h1>System zamawiania etykiet </h1>
    </Stack>

  );
}

