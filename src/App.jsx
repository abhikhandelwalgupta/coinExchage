import { Header } from './componets/Header/Header'
import './App.css'
import { BrowserRouter as Routers, Routes , Route } from 'react-router-dom'
import Home from './componets/Home/Home'
import Exchanges from './componets/Exchanges/Exchanges'
import Coins from './componets/Coins/Coins'

function App() {
  
  return (
    <div className='w-full h-[100vh] overflow-y-hidden relative '>
      <Routers>
        <Header/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='exchanges' element={<Exchanges/>} />
          <Route path='coins' element={<Coins/>} />
        </Routes>
      </Routers>
    </div>
  )
}

export default App
