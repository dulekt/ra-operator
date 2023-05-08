import { Button, Container, Text, Textarea } from '@chakra-ui/react';
import useData from 'hooks/useData';

const ip = '10.76.18.204';
const port = '5000';

export default function SpecialOrderContentView(props) {
    async function sendOrderToServer() {
        // save text from textarea to order.description
        const orderDescription = document.getElementById('orderDescription').value;
        const orderPlusContent = Object.assign(props.order, {
            description: orderDescription,
        });

        const response = await fetch(`http://${ip}:${port}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(orderPlusContent),
        });

        console.log(response);

        document.getElementById('orderDescription').value =
            'ZAMÓWIONE, \nnapisz nowe zamówienie \nalbo wyloguj się \n ';
    }

    return (
        <Container m={1}>
            <Text fontSize="l">{props.order.orderType}</Text>
            <Text fontWeight="bold"> {props.order.labelType}</Text>
            <Textarea id="orderDescription" placeholder="Opis zamówienia..." />
            <Button colorScheme="blue" size="sm" onClick={sendOrderToServer}>
                Zamów
            </Button>
        </Container>
    );
}
