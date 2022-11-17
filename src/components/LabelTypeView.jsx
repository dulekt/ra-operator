import { Button, SimpleGrid, Box, Container } from '@chakra-ui/react'
import labelTypes from 'assets/data/data';



export default function SetLabelView(props) {
    const labels = labelTypes[props.order.orderType]
    return (
        <Container>
            <Box><h1>Wybierz naklejkę: </h1></Box>
            <SimpleGrid  columns={3} minChildWidth='120px' spacing={2}>

                {labels.map((label) =>
                    <Button
                        colorScheme='blue'
                        size='sm'
                        //width='120px'
                        //fontSize= 'sm'
                        key={label}
                        value={label}
                        onClick={label => props.changePrintLabel(label)}>
                        {label.slice(0,20)}
                    </Button>
                )
                }

            </SimpleGrid>

        </Container>


    );
}