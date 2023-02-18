import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.scss"
import { Header, SectionsTitle, Cards, MainButton, SubButton, CollectionsCards, YourNftSteps, MarketItems, Footer } from './components/indexCom'

import { Home, Explore, ItemDetails } from './pages/indexPages'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Explore' element={<Explore />} />
          <Route path='/ItemDetails' element={<ItemDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App