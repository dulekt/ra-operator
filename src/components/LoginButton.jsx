import { Button } from '@chakra-ui/react'
import { MdLogout } from 'react-icons/md';
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
                        m={2}
                    >Log in  </Button>}
            </div>

        );
    }
    return (
        <Button
            leftIcon={<MdLogout />}
            onClick={props.handleLogout}
            colorScheme='red'
            size='xs'
            width='70px'
            m={1}
        >Log out</Button>

    );
}



