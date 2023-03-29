import { Button, ChakraProvider, Stack } from '@chakra-ui/react';
import useData from 'hooks/useData';

import 'typeface-roboto';

export default function OrderTypeView(props) {
    const { labelTypes } = useData();

    const orderTypes = Object.keys(labelTypes);
    const orderTypeButtons = orderTypes?.map(type => (
        <Button
            size="sm"
            width="150px"
            colorScheme="blue"
            key={type}
            value={type}
            onClick={e => props.changeOrderType(e)}
        >
            {type}
        </Button>
    ));

    return (
        <ChakraProvider>
            <Stack direction="column" spacing={1} align="center">
                {orderTypeButtons}
            </Stack>
        </ChakraProvider>
    );
}
