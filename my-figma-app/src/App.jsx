import { useState } from 'react'
import home_head from './assets/home_head.svg'
import './App.css'
import Navbar from './component/Navbar'
import AllRoutes from './component/Allroutes'
import Footer from './component/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <AllRoutes/>
    <Footer/>
          {/* <img src={home_head} className="logo" alt="Vite logo" /> */}
       
    </>
  )
}

export default App
