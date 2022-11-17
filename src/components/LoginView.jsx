import { Select, Input, Stack, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { names } from 'assets/data/data.jsx'


export default function LogInView(props) {
    return (<ChakraProvider >

        <Stack direction='column'
            spacing={1}
            align='center'>
            <Select

                onChange={props.changeUser}
                variant='flushed'
                placeholder="Wybierz Login">
                {names.map((name) =>
                    <option
                        key={name}
                        value={name}>
                        {name}
                    </option>)}
            </Select>
            <InputGroup>
                <InputLeftAddon children='Order:' />
                <Input
                    isRequired={true}
                    variant='flushed'
                    placeholder='Numer zlecenia'
                    value={props.order.orderNumber}
                    onChange={props.changeOrderNumber} />
            </InputGroup>

        </Stack>
    </ChakraProvider>)
}
