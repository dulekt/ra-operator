import { Button, Stack } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import labelTypes from 'assets/data/data';



export default function OrderTypeView(props) {
    const orderTypes = Object.keys(labelTypes)
    console.log(orderTypes)
    const orderTypeButtons = orderTypes.map((type) =>
        <Button
            size='sm'
            width='150px'
            colorScheme='blue'
            key={type}
            value={type}
            onClick={type => props.changeOrderType(type)}
        >{type}</Button>
    );
    return (<ChakraProvider >

        <Stack direction='column'
            spacing={1}
            align='center'>{orderTypeButtons}
        </Stack>
    </ChakraProvider>)
}
