import { useState } from 'react';
import './App.css';
import LogInView from './views/LogInView';
import LoginButton from './components/LoginButton';
import SetLabel from './components/setLabelButton';
import { ChakraProvider, Stack } from '@chakra-ui/react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [order, setOrder] = useState({
    user: "",
    orderNumber: "",
    labelType: "",
    content: ""
  })
  function handleLogin() {
    setIsLoggedIn(!isLoggedIn)

  }
  function changeOrderNumber(e) {
    setOrder({
      ...order,
      orderNumber: e.target.value
    })
  }
  function changePrintLabel(label) {
    setOrder({
      ...order,
      printLabel: { label }
    })
  }

  function changeUser(e) {
    setOrder({
      ...order,
      user: e.target.value
    })
  }

  if (!isLoggedIn) {
    return (
      <ChakraProvider>
        <p>Username: {order.user}</p>
        <p>ON: {order.orderNumber}</p>
        <p>Label: {order.labelType}</p>
        <p>{order.content}</p>
        <></>
        <Stack>
          <div className='container'>
            <LogInView
              order={order}
              changeOrderNumber={changeOrderNumber}
              changeUser={changeUser}
            />
          </div>
          <LoginButton
            isLoggedIn={isLoggedIn}
            handleLogin={handleLogin} />
        </Stack>


      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider>
      <Stack>
        <SetLabel
          changePrintLabel={changePrintLabel} />
        <LoginButton
          isLoggedIn={isLoggedIn}
          handleLogin={handleLogin} />
      </Stack>

    </ChakraProvider>
  )
}
