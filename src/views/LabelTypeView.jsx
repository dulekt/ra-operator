import { Button, Container, SimpleGrid, Spinner } from '@chakra-ui/react';

export default function SetLabelView(props) {
    const labelTypes = props.labelsAndTypes;
    const labels = labelTypes?.[props.order?.orderType];
    const isLoading = !labels.length;

    return (
        <Container>
            <SimpleGrid columns={2} minChildWidth="120px" spacing={2}>
                {isLoading ? (
                    <Spinner />
                ) : (
                    labels?.map(label => (
                        <Button
                            colorScheme="blue"
                            size="sm"
                            key={label}
                            value={label}
                            onClick={e => props.changePrintLabel(e)}
                        >
                            {label.slice(0, 20)}
                        </Button>
                    ))
                )}
            </SimpleGrid>
        </Container>
    );
}
