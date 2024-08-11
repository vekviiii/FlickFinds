import { useState } from 'react'
import Header from './components/header'
import MainLayout from './components/layout/mainlayout'
import Home from './components/home'

const App = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  const handleHeaderActivation = () => {
    setIsHeaderActive(true);
    // Set a timeout to revert the header color after 5 seconds (5000 milliseconds)
    setTimeout(() => {
      setIsHeaderActive(false);
    },100); // You can adjust the duration as needed
  };

  return (
    <>
      <Header isActive={isHeaderActive} />
      <MainLayout>
        <Home activateHeader={handleHeaderActivation} />
      </MainLayout>
    </>
  )
}

export default App