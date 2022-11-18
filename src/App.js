//App.js
import './App.css';
import { useEffect, useState } from 'react';
import { Container, ChakraProvider } from '@chakra-ui/react';
import AppHeader from 'components/AppHeader';
import AppContent from 'components/AppContent';
import AppFooter from 'components/AppFooter';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleLogin() {
    setIsLoggedIn(true)
  }
  function handleLogout(obj) {
    setIsLoggedIn(false)
    SetOrderToNull();
  }

  const [order, setOrder] = useState({
    user: "",
    orderNumber: "",
    orderType: "",
    labelType: "",
    content: [
      { id: "", text: "L1", ammount: 1 }],
    category: "",
    description: ""
  })
  //TODO
  function changeContentText(e) {
    setOrder({
      ...order.content,
      content: { ...order.content, text: e.target.value }
    })
  }
  //TODO 
  function changeContentAmmount(e) {
    setOrder({
      ...order.content,
      ammount: e.target.value
    })

  }
  function addEmptyContent() {
    setOrder({
      ...order,
      content: [
        ...order.content,
        {
          id: order.content.at(-1).id + 1,
          text: "",
          ammount: 1
        }]
    })
  }

  //useEffect(() => { console.log(order); })
  function emptyContent(

  ) {
    setOrder({
      ...order,
      content: [{ id: 1, text: "", ammount: 1 }]
    })
  }
  function SetOrderToNull() {
    setOrder({
      ...order,
      user: "",
      orderNumber: "",
      orderType: "",
      labelType: "",
      content: "",
      category: "",
      description: ""
    })
  }



  function changeUser(e) {
    setOrder({
      ...order,
      user: e.target.value
    })
  }
  function changeOrderNumber(e) {
    setOrder({
      ...order,
      orderNumber: e.target.value
    })
  }
  function changeOrderType(e) {
    setOrder({
      ...order,
      orderType: e.target.value
    })
  }
  function changePrintLabel(e) {
    setOrder({
      ...order,
      labelType: e.target.value
    })
  }

  return (
    <ChakraProvider>
      <Container
        centerContent

        maxHeight="100vh">
        <AppHeader />

        <AppContent
          order={order}
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

    </ChakraProvider>)
}   