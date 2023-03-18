export default function SpecialOrderContentView(props) {
    async function sendOrderToServer() {
        // save text from textarea to order.description
        const orderDescription = document.getElementById('orderDescription').value;
        const orderPlusContent = Object.assign(props.order, {
            description: orderDescription,
        });

        const response = await fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(orderPlusContent),
        });

        document.getElementById('orderDescription').value =
            'ZAMÓWIONE, \nnapisz nowe zamówienie \nalbo wyloguj się \n ';
    }

    return (
        <Container m={1}>
            <h1>Zamowienia specjalne ({props.order.orderType})</h1>
            <Textarea id="orderDescription" placeholder="Opis zamówienia..." />
            <Button colorScheme="blue" size="sm" onClick={sendOrderToServer}>
                Zamów
            </Button>
        </Container>
    );
}
