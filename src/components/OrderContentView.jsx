import { Container, Card, Button, ButtonGroup } from '@chakra-ui/react'
import {
    Box,
    Input,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react'
import { HStack, } from '@chakra-ui/react'


export default function OrderContentView(props) {

    return (
        <Container m={1}>
            <Card><HStack>
                <Input
                    placeholder='Treść'
                    size='sm' />
                <NumberInput
                    size='sm'
                    defaultValue={0}
                    min={0}
                    max={10}>
                    <NumberInputField /><NumberInputStepper >
                        <NumberIncrementStepper children='+' />
                        <NumberDecrementStepper children='-' />
                    </NumberInputStepper></NumberInput>
            </HStack></Card>

            <Button colorScheme='gray' m={1} variant='outline' size='sm'
            >+</Button>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                m={2}>
                <ButtonGroup>
                    <Button colorScheme='blue' size='sm'>Zamow</Button>
                    <Button colorScheme='blue' size='sm'>Drukuj</Button>
                </ButtonGroup>

            </Box>
        </Container>
    );
}