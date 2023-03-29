import { ChakraProvider, Input, InputGroup, InputLeftAddon, Select, Skeleton, Stack, Text } from '@chakra-ui/react';
import useData from 'hooks/useData';

export default function LogInView(props) {
    const { workcenters, users, isLoading } = useData();

    return (
        <ChakraProvider>
            <Skeleton isLoaded={!isLoading}>
                {workcenters.length > 0 && users.length > 0 && (
                    <Stack direction="column" spacing={1} align="center">
                        <Select onChange={props.changeWorkcenter} variant="flushed" placeholder="Wybierz Stanowisko">
                            {workcenters.map((workcenter, index) => (
                                <option key={workcenter + index} value={workcenter.workcenter}>
                                    {workcenter.workcenter}
                                </option>
                            ))}
                        </Select>
                        <Select onChange={props.changeUser} variant="flushed" placeholder="Wybierz Login">
                            {users?.map((user, index) => (
                                <option key={user.username + index} value={user.username}>
                                    {user.username}
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
            {workcenters?.length === 0 && users?.length === 0 && (
                <Text color="red.500" fontSize="l">
                    {'Sprawdż:'}
                    <ol>
                        <li>czy jest dostęp do serwera </li>
                        <li>czy server jest uruchomiony</li>
                        <li>czy dane sa wpisane do baze danych</li>
                    </ol>
                </Text>
            )}
            {workcenters.length === 0 && <Text>Brak dostępnych stanowisk</Text>}
            {users?.length === 0 && <Text>Brak dostępnych loginów</Text>}
        </ChakraProvider>
    );
}
