import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {


  return (
   <div className=''>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    <SpeedInsights/>
   </div>
  )
}

export default App
