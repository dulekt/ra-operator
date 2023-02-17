import {
  Select,
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { names, workcenters } from "assets/data/data.jsx";

export default function LogInView(props) {
  return (
    <ChakraProvider>
      <Stack direction="column" spacing={1} align="center">
        <Select
          onChange={props.changeWorkcenter}
          variant="flushed"
          placeholder="Wybierz Stanowisko"
        >
          {workcenters.map((workcenter) => (
            <option key={workcenter} value={workcenter}>
              {workcenter}
            </option>
          ))}
        </Select>

        <Select
          onChange={props.changeUser}
          variant="flushed"
          placeholder="Wybierz Login"
        >
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
        <InputGroup>
          <InputLeftAddon children="Order:" />
          <Input
            variant="flushed"
            placeholder="Wpisz nr. zlecenia"
            value={props.order.orderNumber}
            onChange={props.changeOrderNumber}
          />
        </InputGroup>
      </Stack>
    </ChakraProvider>
  );
}
