//App.js
import "App.css";
import { useEffect, useState } from "react";
import { Container, ChakraProvider } from "@chakra-ui/react";
import AppHeader from "components/AppHeader";
import AppContent from "views/AppContent";
import AppFooter from "components/AppFooter";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleLogin() {
    setIsLoggedIn(true);
  }
  function handleLogout() {
    setIsLoggedIn(false);
    SetOrderToNull();
    emptyContent();
  }

  const [order, setOrder] = useState({
    user: "",
    orderNumber: "",
    orderType: "",
    labelType: "",
    category: "",
    description: "",
  });

  const [content, setContent] = useState([
    {
      id: 1,
      text: "",
      ammount: 1,
    },
  ]);
  useEffect(() => console.log(order, content));
  function changeContentText(id, e) {
    setContent(
      content.map((contentItem) =>
        contentItem.id === id
          ? { ...contentItem, text: e.target.value }
          : contentItem
      )
    );
  }

  function changeContentAmmount(id, e) {
    setContent(
      content.map((contentItem) =>
        contentItem.id === id ? { ...contentItem, ammount: e } : contentItem
      )
    );
  }

  function addEmptyContent() {
    setContent([
      ...content,
      {
        id: content.at(-1).id + 1,
        text: "",
        ammount: 1,
      },
    ]);
  }

  function emptyContent() {
    setContent([
      {
        id: 1,
        text: "",
        ammount: 1,
      },
    ]);
  }
  function SetOrderToNull() {
    setOrder({
      user: "",
      orderNumber: "",
      orderType: "",
      labelType: "",
      category: "",
      description: "",
    });
  }

  function changeUser(e) {
    setOrder({
      ...order,
      user: e.target.value,
    });
  }
  function changeOrderNumber(e) {
    setOrder({
      ...order,
      orderNumber: e.target.value,
    });
  }
  function changeOrderType(e) {
    setOrder({
      ...order,
      orderType: e.target.value,
    });
  }
  function changePrintLabel(e) {
    setOrder({
      ...order,
      labelType: e.target.value,
    });
  }

  function contentToList(cont) {
    const contentList = [];
    cont.forEach((c) => {
      for (let step = 0; step < c.ammount; step++) {
        contentList.push(c.text);
      }
    });
    console.log(contentList);
    return contentList.filter((el) => {
      return el !== "";
    });
  }

  function printOverIP() {
    let commandZPL = "";
    const listOfLabels = contentToList(content);
    for (let i = 0; i < Math.floor(listOfLabels.length / 3) + 1; i++) {
      commandZPL +=
        "^XA^CF0,17^FO145,20^FD" +
        listOfLabels[3 * i] +
        "^FS^FO345,25^FD " +
        listOfLabels[3 * i + 1] +
        "^FS^FO545,25^FD" +
        listOfLabels[i + 2] +
        "^FS^MMC^XZ";
    }
    console.log(commandZPL);
    return commandZPL;
  }
  return (
    <ChakraProvider>
      <Container centerContent maxHeight="100vh">
        <AppHeader />

        <AppContent
          order={order}
          content={content}
          isLoggedIn={isLoggedIn}
          changeOrderNumber={changeOrderNumber}
          changeOrderType={changeOrderType}
          changePrintLabel={changePrintLabel}
          changeUser={changeUser}
          addEmptyContent={addEmptyContent}
          emptyContent={emptyContent}
          changeContentText={changeContentText}
          changeContentAmmount={changeContentAmmount}
          printOverIP={printOverIP}
        />

        <AppFooter
          order={order}
          isLoggedIn={isLoggedIn}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
        />
      </Container>
    </ChakraProvider>
  );
}
