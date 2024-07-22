import { useState } from 'react'
import { useSelector } from 'react-redux'
import Header from './components/header'
import MainLayout from './components/layout/mainlayout'
import Home from './components/home'

const App = () => {
  const [count, setCount] = useState(0)
  const movies = useSelector((state)=> state.movies)

  console.log(movies)

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