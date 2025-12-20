import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Laptops from './pages/products/Laptop';
import Home from './pages/Home';
import GraphicCard from './pages/products/Gpu';
import MotherBoards from './pages/products/MontherBoard';
import Monitors from './pages/products/Monitor';
import Colling from './pages/products/Coller';
import Desktops from './pages/products/Desktop';
import Contact from './pages/Contact';
import About from './pages/About';



function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products/laptops' element={<Laptops />} />
        <Route path='/products/gpus' element={<GraphicCard />} />
        <Route path='/products/motherboards' element={<MotherBoards />} />
        <Route path='/products/desktops/cases' element={<Desktops />} />
        <Route path='/products/monitors' element={<Monitors />} />
        <Route path='/products/cooling' element={<Colling />} />

      </Routes>
    </>
  )
}

export default App;
