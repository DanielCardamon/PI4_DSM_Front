//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import EditCadastro from './pages/EditCadastro/EditCadastro'
import CadastroEndereco from './pages/CadastroEndereco/CadastroEndereco'
import Menu from './pages/Menu/Menu'
import Acessibilidade from './components/Acessibilidade/Acessibilidade'
import Endereco from './pages/Endereco/Endereco'
import Luz from './pages/Submenus/Luz'
import Agua from './pages/Submenus/Agua'
import Gas from './pages/Submenus/Gas'
import Compras from './pages/Submenus/Compras'
import Outros from './pages/Submenus/Outros'
import AparelhoLuz from './pages/Aparelhos/AparelhoLuz'
import AparelhoAgua from './pages/Aparelhos/AparelhoAgua'
import Aparelhogas from './pages/Aparelhos/Aparelhogas'
import ItemCompras from './pages/Aparelhos/ItemCompras'
import ItemOutros from './pages/Aparelhos/ItemOutros'
//import './Contraste.css'


function App() {

  return (
    <>
 
      <BrowserRouter>
{         
 }        <NavBar /> 
 

 

 <Acessibilidade/>
        <Routes>
          <Route path='/' element={<Home />} />          
         
          <Route path='/Login' element={<Login />} />          
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/Endereco' element={<Endereco />} />
          <Route path='/EditCadastro' element={<EditCadastro />} />
          <Route path='/CadastroEndereco' element={<CadastroEndereco />} />
          
          <Route path='/Luz' element={<Luz />} />
          <Route path='/Agua' element={<Agua />} />
          <Route path='/Gas' element={<Gas />} />
          <Route path='/Compras' element={<Compras />} />
          <Route path='/Outros' element={<Outros />} />

          <Route path='/AparelhoLuz' element={<AparelhoLuz />} />
          <Route path='/AparelhoAgua' element={<AparelhoAgua />} />
          <Route path='/Aparelhogas' element={<Aparelhogas />} />
          <Route path='/ItemCompras' element={<ItemCompras />} />
          <Route path='/ItemOutros' element={<ItemOutros />} />
        </Routes>
        <Footer /> 
            
      </BrowserRouter>  
      
    </>
  )
}

export default App
