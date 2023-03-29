import { MdDelete } from 'react-icons/md';
import { Box, Button, ButtonGroup, Container, IconButton, Tooltip } from '@chakra-ui/react';
import OrdersList from 'components/OrdersList';
import { convertContentToList } from 'utils/convertContentToList';
import { preparePrintPayload } from 'utils/preparePrintPayload';
import { printViaAPI } from 'utils/print';

// todo: hide print button if the label is not printable in that workcenter
// import { getPrintableLabels } from "assets/data/data";
const ip = '10.76.18.176';
const port = '5000';

export default function OrderContentView(props) {
    const { labelType } = props;
    const { orderType } = props;
    async function sendOrderToServer() {
        const contentList = convertContentToList(props.content);
        const orderPlusContent = Object.assign(props.order, {
            content: contentList,
        });

        const response = await fetch(`http://${ip}:${port}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderPlusContent),
        });

        const data = await response.json();
        console.log('DATA', data);

        props.emptyContent();
    }

    async function handlePrint() {
        const printContent = convertContentToList(props.content);
        const printPayload = preparePrintPayload(printContent);
        const printerResponse = await printViaAPI(printPayload);
        console.log('PRINTER RESPONSE', printerResponse);
    }

    return (
        <Container m={1}>
            <div>
                <b>Username:</b> {props?.order?.user}{' '}
            </div>
            <div className="orderType">{`${orderType} : ${labelType}`}</div>
            <OrdersList
                content={props.content}
                addEmptyContent={props.addEmptyContent}
                emptyContent={props.emptyContent}
                changeContentText={props.changeContentText}
                changeContentAmmount={props.changeContentAmmount}
                removeContent={props.removeContent}
            />
            <Button colorScheme="green" m={1} variant="outline" size="sm" onClick={props.addEmptyContent}>
                +
            </Button>
            <Tooltip label="Usuń Wszystko!">
                <IconButton
                    className="deleteAll"
                    aria-label="Usuń Wszystko"
                    icon={<MdDelete />}
                    m={1}
                    colorScheme="red"
                    size="sm"
                    onClick={props.emptyContent}
                />
            </Tooltip>
            <Box display="flex" alignItems="center" justifyContent="center" m={2}>
                <ButtonGroup>
                    <Button colorScheme="blue" size="sm" onClick={sendOrderToServer}>
                        Zamow
                    </Button>
                    <Button colorScheme="blue" size="sm" onClick={handlePrint}>
                        Drukuj
                    </Button>
                </ButtonGroup>
            </Box>
        </Container>
    );
}
