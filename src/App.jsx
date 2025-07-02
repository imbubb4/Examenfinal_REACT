import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CardList from './components/CardList.jsx'
import Info from './pages/Info.jsx'
import Contact from './pages/Contact.jsx'
import HeroSlider from './components/HeroSlider.jsx'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={
          <>
            <h1 className='text-center text-primary'>AQUI SE MUESTRA LA API</h1>
            <HeroSlider />
            <CardList />
          </>
        }/>
        <Route path="/info" element={<Info />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
