import {BrowserRouter as Routes, Route}from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Produto from './pages/Produto'
import Contato from './pages/Contato'

const App = () => {
  return (
    <Router>
      <div className='min-h-screen bg-gray-50 text-gray-900'></div>
        <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/produto" element={<Produto/>}/>
            <Route path="/contato" element={<Contato/>}/>
          </Routes>
        </main>
    
    
    </Router>
  )
}

export default App
