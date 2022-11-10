import { Select, Input, Button, Stack } from '@chakra-ui/react'


const names = ["Dusko", "Anna", "Marko", "Petar"]

export default function Login(props) {

    return (

        <Stack direction='column' spacing={1} align='center' className='login-dropdown'>
            <Select placeholder="Wpisz Login">
                {names.map((name) =>
                    <option value={name} >{name}</option>)}
            </Select>
            <Input placeholder='Numer zlecenia'
                value={props.orderNumber}
                onChange={props.assignOrder} />

            <Button
                onClick={props.handleLogin}
                colorScheme='blue' 
                >Log in</Button>
             
            
        </Stack>


    );
}



