import React from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import './Aside.css'
import '../../App.css'

export default function Aside() {
  function mostrar(){
    const aparelhos = document.querySelectorAll(".aparelhos")
    for(let i in aparelhos){
      aparelhos[i].classList.toggle("hide")
    }
  }

  return (
    <>
      <aside>
        <Link to="/"><div id="logoHome"><img src={logo} alt="logo" className='logo' /></div></Link>
        <ul>
          <Link to="/Endereco"><li>Endereços</li></Link>
          <li id="Aparelhos" onClick={mostrar}>Aparelhos
            <ul >
            <Link to="/Luz"> <li className='aparelhos hide'>Aparelhos eletricos</li></Link>
            <Link to="/Agua"> <li className='aparelhos hide'>Aparelhos de agua</li></Link>
            <Link to="/Gas"> <li className='aparelhos hide'>Aparelhos de gas</li></Link>
            </ul></li>
            <Link to="/Compras"> <li>Compras</li></Link>
            <Link to="/Outros"> <li>Outros</li></Link>

        </ul>
      </aside>
    </>
  )
}