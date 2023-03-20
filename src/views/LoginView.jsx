import { useEffect, useState } from 'react';
import { ChakraProvider, Input, InputGroup, InputLeftAddon, Select, Skeleton, Stack } from '@chakra-ui/react';
import { getNames, getWorkcenters } from 'assets/data/data.jsx';

export default function LogInView(props) {
    const [names, setNames] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [workcenters, setWorkcenters] = useState([]);

    useEffect(() => {
        setIsLoaded(false);

        getNames().then(name => setNames(name));

        getWorkcenters().then(workcenter => setWorkcenters(workcenter));

        setIsLoaded(true);
    }, []);

    return (
        <ChakraProvider>
            <Skeleton isLoaded={isLoaded}>
                <Stack direction="column" spacing={1} align="center">
                    <Select onChange={props.changeWorkcenter} variant="flushed" placeholder="Wybierz Stanowisko">
                        {workcenters.map((workcenter, index) => (
                            <option key={workcenter + index} value={workcenter}>
                                {workcenter}
                            </option>
                        ))}
                    </Select>

                    <Select onChange={props.changeUser} variant="flushed" placeholder="Wybierz Login">
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
            </Skeleton>
        </ChakraProvider>
    );
}
