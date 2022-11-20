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
              onChange={(e) => props.changeContentText(contentObj.id, e)}
            />

            <NumberInput
              size="sm"
              defaultValue={1}
              id={contentObj.id}
              min={1}
              max={10}
              value={contentObj.ammount}
              onChange={(e) => props.changeContentAmmount(contentObj.id, e)}
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
