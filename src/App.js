import { useState } from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Login from './components/Login';
import PickLabel from './components/PickLabel';

function App() {
  const [isLoggedin, setIsLoggedin] = useState(true);
  const [user, setUser] = useState("")
  const [orderNumber, setOrderNumber] = useState()
  const [label, setLabel] = useState()
  const [printLabel, setPrintLabel] = useState(false)
  const [content, setContent] = useState({ "": 0 })


  const handleLogin = () => {
    setIsLoggedin(true);
  }
  const handleLogout = () => {
    setIsLoggedin(false);
  }
  const handleUser = (user) => {
    setUser(user);
  }
  const assignOrder = (value) => {
    setOrderNumber(value);
  }
  const assignLabel = (value) => {
    setLabel(value);
  }
  if (!isLoggedin) {
    return (
      <div className='container'>
        <ChakraProvider >
          <div className="App"  >
            <h1 className='Header'>System zamawiania oznaczen <br /></h1>
            <Login
              isLoggedin={isLoggedin}
              handleLogin={handleLogin}
              user={user}
              handleUser={handleUser}
              orderNumber = {orderNumber}
              assignOrder={assignOrder}


            />
          </div>
        </ChakraProvider>

      </div>
    );
  }
  return (
    <div className='container'>
      <ChakraProvider >

        <div className="App"  >
          <h1 className='Header'>System zamawiania oznaczen <br /></h1>
          <PickLabel
            handleLogout={handleLogout}
            assignLabel={assignLabel} />

        </div>
      </ChakraProvider>

    </div>
  );
}

export default App;
