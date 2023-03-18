// AppHeader.jsx
import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { Button, Heading, Image, Stack } from '@chakra-ui/react';

import RAlogo from '../assets/images/RA_Logo_Bug-LeftText_rgb.png';

export default function AppHeader(props) {
    return (
        <>
            <Stack direction="row">
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
                <Image height="37px" src={RAlogo} alt="RA_logo" />{' '}
                <Heading size="md">System zamawiania etykiet </Heading>
            </Stack>
        </>
    );
}
