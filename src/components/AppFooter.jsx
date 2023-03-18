//
import React from 'react';
import { Container } from '@chakra-ui/react';

import LoginButton from './LoginButton';

export default function AppFooter(props) {
    return (
        <Container align={'center'}>
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
