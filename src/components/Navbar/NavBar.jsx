import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../../assets/logo.svg'
import logoAzul from '../../assets/LogoAzul.svg'
import alerta from "../../assets/alertab.svg"
import config from "../../assets/Config.svg"
import user from '../../assets/user.svg'
import contraste from '../../assets/contrast.svg'
import { FaBars } from "react-icons/fa"
import '../../App.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aside from "../Aside/Aside"
const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function aparece() {
    const aparelhos = document.querySelectorAll(".aparelhos")
    for (let i in aparelhos) {
      aparelhos[i].classList.toggle("hide")
    }
  }



  function contrasteBtn() {
    const logado = document.querySelector(".logado")
    const noCadastro = document.querySelector(".noCadastro")
    logado.classList.toggle(".hide")
    noCadastro.classList.toggle(".hide")
  }
  /*  if (lvl == 0){//contraste normal
      tag[0].href = url1
    }
    else if (lvl == 1){//alto contraste
      tag[0].href = url2
    }
    else if(lvl == 2){//contraste azul
      tag[0].href = url3
    }
    else{
      lvl = 0
    }*/


  return (

    <nav >
      <div className='Container'>
        <FaBars onClick={handleShow} className="aside" />
        <Link to="/"><div id="logoHome"><img src={logo} alt="logo" className='logo' /></div></Link>
      </div>
      <div className='navSobre'>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <Link to="/" className='Link'> <h1><img src={logoAzul} className='logoAzul' alt="logo azul" />Teto<span>finanças</span> </h1></Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>

            <Link to="/"><div id="logoHome"><img src={logo} alt="logo" className='logo' /></div></Link>

            <ul>
              <Link to="/Menu"><li>Menu</li></Link>
              <Link to="/Endereco"><li>Endereços</li></Link>

              <li id="Aparelhos" onClick={aparece}>Aparelhos
                <ul >
                  <Link to="/Luz"> <li className='aparelhos hide'>Aparelhos eletricos</li></Link>
                  <Link to="/Agua"> <li className='aparelhos hide'>Aparelhos de agua</li></Link>
                  <Link to="/Gas"> <li className='aparelhos hide'>Aparelhos de gas</li></Link>
                </ul></li>
              <Link to="/Compras"> <li>Compras</li></Link>
              <Link to="/Outros"> <li>Outros</li></Link>

            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>

      <div className='logado hide'>
        <div className='simbolos ' >

          <img src={alerta} alt="alerta" />
          <Link to="/EditCadastro"><img src={config} alt="configurações" /></Link>
        </div>

        <div className='usuario  '>
          <h2>Olá: { }</h2>
          <Link to="/Login"><img src={user} className='user' alt="user" /></Link>
        </div>
      </div>
      <div className='noCadastro '>

        <Link to="/Login"><button className='buttonsp ' type='button'>Logar</button></Link>
        <Link to="/cadastro"><button className='buttonsp ' type='button'>Casdastrar</button></Link>
      </div>
    </nav>
  )
}

export default NavBar