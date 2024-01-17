import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import './App.css'
import Home from './pages/Home'
import Exercise from './pages/Exercise'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/exercise/:id" element={<Exercise></Exercise>}></Route>
      </Routes>
      <Footer></Footer>
    </Box>
  )
}

export default App
