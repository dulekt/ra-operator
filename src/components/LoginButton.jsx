import { Button } from '@chakra-ui/react'

export default function LoginButton(props) {
    if (!props.isLoggedIn) {
        return (
            <div>
                {
                    props.order.user.length > 0 &&
                    props.order.orderNumber.length > 0 &&
                    <Button
                        onClick={props.handleLogin}
                        colorScheme='blue'
                        size='sm'
                        width='80px'
                    >Log in  </Button>}
            </div>

        );
    }
    return (
        <Button
            onClick={props.handleLogout}
            colorScheme='red'
            size='sm'
            width='80px'
        >Log out</Button>

    );
}



