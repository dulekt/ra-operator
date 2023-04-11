import { MdDelete } from 'react-icons/md';
import { Box, Button, ButtonGroup, Container, IconButton, Tooltip, useToast } from '@chakra-ui/react';
import OrdersList from 'components/OrdersList';
import { convertContentToList } from 'utils/convertContentToList';
import { preparePrintPayload } from 'utils/preparePrintPayload';
import { printViaAPI } from 'utils/print';

// todo: hide print button if the label is not printable in that workcenter
// import { getPrintableLabels } from "assets/data/data";
const ip = '10.76.18.176';
const port = '5000';

export default function OrderContentView(props) {
    const { labelType, orderType } = props;

    const toastContent = {
        title: 'Zamówienie wysłane',
        description: 'Zamówienie zostało wysłane do serwera',
        status: 'success',
        duration: 4000,
        isClosable: true,
    };

    const toast = useToast();

    async function sendOrderToServer() {
        const contentList = convertContentToList(props.content);
        const orderPlusContent = Object.assign(props.order, {
            content: contentList,
        });

        // if content is empty, do not send
        if (contentList.length < 1 && contentList[0] === '') {
            const response = await fetch(`http://${ip}:${port}/orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderPlusContent),
            });

            const data = await response.json();
            console.log('DATA', data);
        }

        toast(toastContent);

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
                    {/*
//todo show only when printers are available
                   <Button colorScheme="blue" size="sm" onClick={handlePrint}>
                        Drukuj
    </Button> */}
                </ButtonGroup>
            </Box>
        </Container>
    );
}
