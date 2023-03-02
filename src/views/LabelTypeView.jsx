import { Button, SimpleGrid, Container } from "@chakra-ui/react";

export default function SetLabelView(props) {
  const labelTypes = props.labelTypes;
  const labels = labelTypes[props.order.orderType];
  return (
    <Container>
      <SimpleGrid columns={2} minChildWidth="120px" spacing={2}>
        {labels.map((label) => (
          <Button
            colorScheme="blue"
            size="sm"
            //width='120px'
            //fontSize= 'sm'
            key={label}
            value={label}
            onClick={(label) => props.changePrintLabel(label)}
          >
            {label.slice(0, 20)}
          </Button>
        ))}
      </SimpleGrid>
    </Container>
  );
}
