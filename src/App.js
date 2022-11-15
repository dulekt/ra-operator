//App.js
import './App.css';
import { useState } from 'react';
import { Container, ChakraProvider } from '@chakra-ui/react';
import AppHeader from './components/AppHeader';
import AppContent from './components/AppContent';
import AppFooter from './components/AppFooter';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleLogin() {
    setIsLoggedIn(true)
  }
  function handleLogout() {
    setIsLoggedIn(false)
  }
  
  return (
    <ChakraProvider>
      <Container centerContent>
        <AppHeader />
        <AppContent
          isLoggedIn={isLoggedIn}
        />
        <AppFooter
          isLoggedIn={isLoggedIn}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
        />
      </Container>
    </ChakraProvider>)
}