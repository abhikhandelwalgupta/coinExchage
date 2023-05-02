import { Header } from './componets/Header/Header'
import './App.css'
import { BrowserRouter as Routers, Routes , Route } from 'react-router-dom'
import Home from './componets/Home/Home'
import Exchanges from './componets/Exchanges/Exchanges'
import Coins from './componets/Coins/Coins'
import { CoinDetails } from './componets/Coins/CoinDetails'

function App() {
  
  return (
    <div className='w-]100vw] h-[100vh] overflow-x-hidden relative '>
      <Routers>
        <Header/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='exchanges' element={<Exchanges/>} />
          <Route path='coins' element={<Coins/>} />
          <Route path='coinDetails/:id' element={<CoinDetails/>}/>
        </Routes>
      </Routers>
    </div>
  )
}

export default App
