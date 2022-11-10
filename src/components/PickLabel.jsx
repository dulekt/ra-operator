import { Button, Stack } from '@chakra-ui/react'
const labels = ["80009-269-04", "T991-255", "80009-255-01", "T991-222"]



export default function PickLabel(props) {
    return (
        <div className='print-label'>

            <Stack direction='column' spacing={1} align='center'>
                <h1>Wybierz naklejkę: </h1>
                {labels.map((label) => <Button colorScheme='blue'>{label}</Button>)}
                <Button
                    onClick={props.handleLogout}
                    colorScheme='red' >Log out</Button>
            </Stack>

        </div>

    );
}

