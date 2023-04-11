import {
    Button,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    useDisclosure,
} from '@chakra-ui/react';

export default function ModalLabels() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            {/*
                <Button colorScheme="blue" size="sm" onClick={onOpen} variant="outline" m={1}>
                    Pokaz naklejki
                </Button> */}

            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="30%" backdropBlur="5px" />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image src="https://i.imgur.com/j9LqB9C.png" alt="logo" />
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} size="sm" onClick={onClose}>
                            Zamknij
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
