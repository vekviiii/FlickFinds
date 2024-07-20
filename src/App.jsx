import { useState } from 'react'
import MainLayout from './components/layout/mainlayout'
import Home from './components/home'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <MainLayout>
        <Home/>
      </MainLayout>
    </>
  )
}

export default App