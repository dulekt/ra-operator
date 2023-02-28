import {
  Select,
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getWorkcenters, getNames } from "assets/data/data.jsx";

export default function LogInView(props) {
  const [names, setNames] = useState([]);
  const [workcenters, setWorkcenters] = useState([]);
  useEffect(() => {
    getNames().then((names) => setNames(names));
    getWorkcenters().then((workcenters) => setWorkcenters(workcenters));
  }, []);

  return (
    <ChakraProvider>
      <Stack direction="column" spacing={1} align="center">
        <Select
          onChange={props.changeWorkcenter}
          variant="flushed"
          placeholder="Wybierz Stanowisko"
        >
          {workcenters.map((workcenter, index) => (
            <option key={workcenter + index} value={workcenter}>
              {workcenter}
            </option>
          ))}
        </Select>

        <Select
          onChange={props.changeUser}
          variant="flushed"
          placeholder="Wybierz Login"
        >
          {names.map((name, index) => (
            <option key={name + index} value={name}>
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
