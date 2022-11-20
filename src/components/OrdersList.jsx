import {
  Card,
  HStack,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export default function OrdersList(props) {
  return (
    <>
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
    </>
  );
}
