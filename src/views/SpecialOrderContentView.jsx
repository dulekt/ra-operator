import { Container } from "@chakra-ui/react";
import { Textarea, Button } from "@chakra-ui/react";

export default function SpecialOrderContentView(props) {
  return (
    <Container m={1}>
      <h1>Zamowienia specjalne ({props.order.orderType})</h1>
      <Textarea placeholder="Opis zamówienia..." />
      <Button colorScheme="blue" size="sm">
        Zamów
      </Button>
    </Container>
  );
}
