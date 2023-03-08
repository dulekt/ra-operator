import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export default function OrderAmmountInput(props) {
  return (
    <>
      <NumberInput
        size="sm"
        defaultValue={1}
        min={1}
        max={13}
        value={props.ammount}
        onChange={(num) => props.changeContentAmmount(props.contentId, num)}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper children="+" />
          <NumberDecrementStepper children="-" />
        </NumberInputStepper>
      </NumberInput>
    </>
  );
}
