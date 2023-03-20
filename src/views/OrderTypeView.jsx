// import labelTypes from "assets/data/data";
import { Button, ChakraProvider, Stack } from '@chakra-ui/react';

import 'typeface-roboto';

export default function OrderTypeView(props) {
    const labelTypes = props.labelsAndTypes;
    const orderTypes = Object.keys(labelTypes);
    const orderTypeButtons = orderTypes.map(type => (
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
