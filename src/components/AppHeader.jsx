//AppHeader.jsx
import React from "react";
import { Image, Stack } from '@chakra-ui/react'
import RAlogo from '../assets/images/RA_Logo_Bug-LeftText_rgb.png'
export default function AppHeader() {
  return (
    <Stack 
    direction='row'
    //width="100%"
    >
      <Image
        height='25px'
        src={RAlogo}
        alt='RA_logo'

      />
      <h1>System zamawiania etykiet  </h1>
    </Stack>

  );
}

