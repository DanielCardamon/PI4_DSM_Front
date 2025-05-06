import React from 'react'
import home from '../../assets/Home.svg'
import novo from '../../assets/AddPal3.svg'
import {Link} from 'react-router-dom'
import "./Enderecos.css"
export const AddEndereco = () => {
  return (
    <Link to="/CadastroEndereco">
    <div className='addenderecos'>
        <img src={novo} alt="adicionar enderecos" id ="novo" />
       
       
    </div>
    </Link>
  )
}
