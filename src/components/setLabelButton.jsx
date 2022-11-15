import { Button, SimpleGrid, Box, Container } from '@chakra-ui/react'

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


        <Container>

            <Box><h1>Wybierz naklejkę: </h1></Box>
            <SimpleGrid columns={3} spacing={1}>

                {labels.map((label) =>
                    <Box>
                        <Button
                            colorScheme='blue'
                            size='md'
                            width='130px'
                            onClick={label => props.changePrintLabel(label)}>
                            {label}
                        </Button>
                    </Box>
                )
                }

            </SimpleGrid>

        </Container>


    );
}