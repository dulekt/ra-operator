//App.js
import './App.css';
import { useState } from 'react';
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
    content: "",
    category: "",
    description: ""
  })

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
        centerContent>
{/*        <p>user: {order.user},  order: {order.orderNumber}, order Type: {order.orderType}
          , Label Type: {order.labelType}
  , content: {order.content} </p>*/}
        <AppHeader />

        <AppContent
          order={order}
          isLoggedIn={isLoggedIn}
          changeOrderNumber={changeOrderNumber}
          changeOrderType={changeOrderType}
          changePrintLabel={changePrintLabel}
          changeUser={changeUser}
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