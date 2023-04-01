import { Button, Container, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import ModalLabels from 'components/ModalLabels';
import useData from 'hooks/useData';

export default function SetLabelView(props) {
    const { labelTypes } = useData();
    const labels = labelTypes?.[props.order?.orderType];

    return (
        <Container>
            <SimpleGrid columns={2} minChildWidth="150px" spacing={2}>
                {!labels?.length && (
                    <Text fontSize="l" color="red.500">
                        No labels defined
                    </Text>
                )}
                {!labels?.length ? (
                    <Spinner />
                ) : (
                    labels?.map(label => (
                        <Button
                            colorScheme="blue"
                            size="md"
                            key={label}
                            value={label}
                            onClick={e => props.changePrintLabel(e)}
                        >
                            {label?.slice(0, 25)}
                        </Button>
                    ))
                )}
            </SimpleGrid>
            <ModalLabels />
        </Container>
    );
}
