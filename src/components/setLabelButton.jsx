import { Button, Stack } from '@chakra-ui/react'

const labels = [
    "80006-269-04",
    "T9957-018",
    "Lat 8",
    "Lat 22 (6)",
    "Lat 22 (12)",
    "T9957-023",
    "RU-8501"
]
export default function SetLabel(props) {
    return (
        <div className='print-label'>

            <Stack direction='column' spacing={1} align='center'>
                <h1>Wybierz naklejkę: </h1>
                {labels.map((label) =>
                    <Button colorScheme='blue'   
                    onClick={label => props.changePrintLabel(label)}          
                    >
                        {label}
                    </Button>)}

            </Stack>

        </div>

    );
}