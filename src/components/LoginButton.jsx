import { Button } from '@chakra-ui/react'

export default function LoginButton(props) {
    if (!props.isLoggedIn) {
        return (
            <Button
                onClick={props.handleLogin}
                colorScheme='blue'
                size='md'
                width='130px'
            >Log in  </Button>
        );
    }
    return (
        <Button
            onClick={props.handleLogin}
            colorScheme='red'
        >Log out</Button>

    );
}



