import { useEffect, useState } from 'react';
import { ChakraProvider, Input, InputGroup, InputLeftAddon, Select, Skeleton, Stack, Text } from '@chakra-ui/react';
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
                {workcenters.length > 0 && names.length > 0 && (
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
                )}
            </Skeleton>
            {workcenters.length === 0 && names.length === 0 && (
                <Text color="red.500" fontSize="l">
                    <ol>
                        {'Sprawdż:'}
                        <li>czy jest dostęp do serwera </li>
                        <li>czy server jest uruchomiony</li>
                        <li>czy dane sa wpisane do baze danych</li>
                    </ol>
                </Text>
            )}
            {workcenters.length === 0 && <Text>Brak dostępnych stanowisk</Text>}
            {names.length === 0 && <Text>Brak dostępnych loginów</Text>}
        </ChakraProvider>
    );
}
