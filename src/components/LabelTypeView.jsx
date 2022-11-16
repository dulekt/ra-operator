import { Button, SimpleGrid, Box, Container } from '@chakra-ui/react'
import labelTypes from 'assets/data/data';



export default function SetLabelView(props) {
    const labels = labelTypes[props.order.orderType]
    return (
        <Container>
            <Box><h1>Wybierz naklejkę: </h1></Box>
            <SimpleGrid columns={3} spacing={1}>

                {labels.map((label) =>
                    <Button
                        colorScheme='blue'
                        size='sm'
                        width='120px'
                        key={label}
                        value={label}
                        onClick={label => props.changePrintLabel(label)}>
                        {label}
                    </Button>
                )
                }

            </SimpleGrid>

        </Container>


    );
}