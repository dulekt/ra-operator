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

import { useEffect, useState } from 'react'


import { preparePrintPayload } from "utils/preparePrintPayload";
import { convertContentToList } from "utils/convertContentToList";
import { print, printViaAPI } from "utils/print";

import { getPrinters } from "utils/getPrinters";

export default function OrderContentView(props) {
  const [printers, setPrinters] = useState([])

  useEffect(() => {
    const getPrintersList = async () => {
      const printersList = await getPrinters()

      console.log('PRINTER LIST', printersList)

      setPrinters(printersList)
    }

    getPrintersList()

  }, [])


  async function handlePrint() {
    const printContent = convertContentToList(props.content)
    const printPayload = preparePrintPayload(printContent)

    // print(printPayload)
    const printerResponse = await printViaAPI(printPayload)
    console.log('PRINTER RESPONSE', printerResponse)
  }

  return (
    <Container m={1}>
      <OrdersList
        content={props.content}
        addEmptyContent={props.addEmptyContent}
        emptyContent={props.emptyContent}
        changeContentText={props.changeContentText}
        changeContentAmmount={props.changeContentAmmount}
      />
      <Button
        colorScheme="green"
        m={1}
        variant="outline"
        size="sm"
        onClick={props.addEmptyContent}
      >
        +
      </Button>{" "}
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
          <Button colorScheme="blue" size="sm">
            Zamow
          </Button>
          <Button colorScheme="blue" size="sm" onClick={handlePrint}>
            Drukuj
          </Button>
        </ButtonGroup>
      </Box>
      <pre>{JSON.stringify(printers, null, 4)}</pre>
    </Container>
  );
}
