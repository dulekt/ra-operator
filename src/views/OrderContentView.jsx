import {
  Container,
  Card,
  Button,
  IconButton,
  ButtonGroup,
  Tooltip,
} from "@chakra-ui/react";
import {
  Box,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";

export default function OrderContentView(props) {
  return (
    <Container m={1}>
      {props.order.content.map((content, index) => (
        <Card>
          <HStack>
            <Input
              placeholder="Treść"
              size="sm"
              key={index}
              id={index}
              value={content.text}
              onChange={props.changeContentText}
            />
            <p>{index}</p>
            <NumberInput
              size="sm"
              defaultValue={1}
              key={index}
              id={index}
              min={1}
              max={10}
              value={props.ammount}
              onChange={props.changeContentAmmount}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper children="+" />
                <NumberDecrementStepper children="-" />
              </NumberInputStepper>
            </NumberInput>
          </HStack>
        </Card>
      ))}
      <Button
        colorScheme="green"
        m={1}
        variant="outline"
        size="sm"
        onClick={props.addEmptyContent}
      >
        +
      </Button>

      <Tooltip label="Usuń Wszystko!">
        <IconButton
          className="deleteAll"
          aria-label="Usuń Wszystko"
          icon={<MdDelete />}
          m={1}
          colorScheme="red"
          size="sm"
          onClick={props.emptyContent}
        />
      </Tooltip>

      <Box display="flex" alignItems="center" justifyContent="center" m={2}>
        <ButtonGroup>
          <Button colorScheme="blue" size="sm">
            Zamow
          </Button>
          <Button colorScheme="blue" size="sm">
            Drukuj
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
}
