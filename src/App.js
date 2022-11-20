//App.js
import "./App.css";
import { useState } from "react";
import { Container, ChakraProvider } from "@chakra-ui/react";
import AppHeader from "components/AppHeader";
import AppContent from "components/AppContent";
import AppFooter from "components/AppFooter";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleLogin() {
    setIsLoggedIn(true);
  }
  function handleLogout() {
    setIsLoggedIn(false);
    SetOrderToNull();
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
      text: "Dusko",
      ammount: 1,
    },
    {
      id: 2,
      text: "Pawel",
      ammount: 1,
    },
  ]);

  //TODO
  function changeContentText(id, e) {
    console.log(content);
    setContent(
      content.map((contentItem) =>
        contentItem.id === id
          ? { ...contentItem, text: e.target.value }
          : contentItem
      )
    );
  }

  //TODO
  function changeContentAmmount(id, e) {
    console.log(content);
    setContent(
      content.map((contentItem) =>
        contentItem.id === id
          ? { ...contentItem, ammount: e.target.value }
          : contentItem
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
