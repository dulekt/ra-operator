import { Select, Input, Stack } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

const names = ["Dusko", "Anna", "Marko", "Petar"]

export default function LogInView(props) {
    return (<ChakraProvider >

        <div className="App"  >
            <h1 className='Header'>System zamawiania oznaczen </h1>
            <Stack direction='column'
                spacing={1}
                align='center'
                className='login-dropdown'>

                <Select
                    onChange={props.changeUser}
                    placeholder="Wybierz Login">
                    {names.map((name) =>
                        <option
                            key={name}
                            value={name}>
                            {name}
                        </option>)}
                </Select>

                <Input placeholder='Numer zlecenia'
                    value={props.order.orderNumber}
                    onChange={props.changeOrderNumber} />



            </Stack>

        </div>
    </ChakraProvider>)
}
