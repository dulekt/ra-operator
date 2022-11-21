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

export default function OrderContentView(props) {
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
          <Button colorScheme="blue" size="sm" onClick={props.printOverIP}>
            Drukuj
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
}
