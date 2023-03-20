import { MdLogout } from 'react-icons/md';
import { Button } from '@chakra-ui/react';

export default function LoginButton(props) {
    if (!props.isLoggedIn) {
        return (
            <>
                {props.order.user.length > 0 &&
                    props.order.workcenter.length > 0 &&
                    props.order.orderNumber.length > 0 && (
                        <Button onClick={props.handleLogin} colorScheme="blue" size="sm" width="80px">
                            Log in{' '}
                        </Button>
                    )}
            </>
        );
    }

    return (
        <Button leftIcon={<MdLogout />} onClick={props.handleLogout} colorScheme="red" size="xs" width="70px" m={1}>
            Log out
        </Button>
    );
}
