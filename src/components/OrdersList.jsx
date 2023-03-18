import { Button, Card, HStack, Input } from '@chakra-ui/react';
import OrderAmmountInput from 'components/OrderAmmountInput';

export default function OrdersList(props) {
    return (
        <>
            {props.content.map(contentObj => (
                <Card key={contentObj.id}>
                    <HStack>
                        <Input
                            placeholder="Treść"
                            size="sm"
                            id={contentObj.id}
                            value={contentObj.text}
                            onChange={e => props.changeContentText(contentObj.id, e)}
                        />

                        <OrderAmmountInput
                            ammount={contentObj.ammount}
                            changeContentAmmount={props.changeContentAmmount}
                            contentId={contentObj.id}
                        />
                    </HStack>
                </Card>
            ))}
        </>
    );
}
