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
      {props.content.map((contentObj, index) => (
        <Card>
          <HStack key={index}>
            <p>{index + 1}</p>
            <Input
              placeholder="Treść"
              size="sm"
              id={contentObj.id}
              value={contentObj.text}
              onChange={(e) => props.changeContentText(index, e)}
            />

            <NumberInput
              size="sm"
              defaultValue={1}
              id={index}
              min={1}
              max={10}
              value={contentObj.ammount}
              onChange={(e) => props.changeContentAmmount(index, e)}
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
