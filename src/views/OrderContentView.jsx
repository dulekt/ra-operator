import OrdersList from "components/OrdersList";

import {
  Container,
  Button,
  IconButton,
  ButtonGroup,
  Tooltip,
  Box,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { preparePrintPayload } from "utils/preparePrintPayload";
import { convertContentToList } from "utils/convertContentToList";
import { printViaAPI } from "utils/print";
import { getPrintableLabels } from "assets/data/data";

export default function OrderContentView(props) {
  const labelType = props.labelType;
  const orderType = props.orderType;
  async function sendOrderToServer() {
    const contentList = convertContentToList(props.content);
    const orderPlusContent = Object.assign(props.order, {
      content: contentList,
    });

    const response = await fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderPlusContent),
    });
    const data = await response.json();
    console.log("DATA", data);
    props.emptyContent();
  }

  async function handlePrint() {
    const printContent = convertContentToList(props.content);
    const printPayload = preparePrintPayload(printContent);
    const printerResponse = await printViaAPI(printPayload);
    console.log("PRINTER RESPONSE", printerResponse);
  }

  const printableLabels = ["223"];
  //
  getPrintableLabels(props.order.workcenter).then((labels) => {
    labels.forEach((label) => {
      printableLabels.push(label);
    });
  });
  //get printable labels with useEffect

  return (
    <Container m={1}>
      <div>
        <b>Username:</b> {props.order.user}{" "}
      </div>
      <div className="orderType">{orderType + " : " + labelType}</div>
      <OrdersList
        content={props.content}
        addEmptyContent={props.addEmptyContent}
        emptyContent={props.emptyContent}
        changeContentText={props.changeContentText}
        changeContentAmmount={props.changeContentAmmount}
        removeContent={props.removeContent}
      />
      <Button
        colorScheme="green"
        m={1}
        variant="outline"
        size="sm"
        onClick={props.addEmptyContent}
      >
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
          printable labels
          {
            <ol>
              {printableLabels.map((label) => (
                <li>{label}</li>
              ))}
            </ol>
          }
        </ButtonGroup>
      </Box>
    </Container>
  );
}
