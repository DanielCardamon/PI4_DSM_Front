import React from 'react'
import home from '../../assets/Home.svg'
import novo from '../../assets/Add.svg'
import {Link} from 'react-router-dom'
import "./Enderecos.css"
import { useEffect } from 'react'

import { useState } from 'react'
export const Enderecos = ({tipo, cep, rua, numero}) => {
  const [Enderecos, setEnderecos] = useState([])
  useEffect(() => {

    fetch("http://localhost:8090/usuario/enderecos/listar", {//metodo get
        method: "get",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
  
    })
  
        .then((res) => res.json())
        .then((data) => {
          
          setEnderecos(data)
        })
        .catch((err) => alert(err))
  
  }, [])
  return (
    <>
    {Enderecos?.map((endereco, indice)=>
      <Link to="/Endereco">
    <div className='enderecos'>
        <img src={home} alt="enderecos" id ="home" />
        <h3 id="tipo">{indice}</h3>
        <p className='dados'>{endereco.cep}</p>
        <p className='dados'>{endereco.rua},</p>
        <p className='dados'>{endereco.numero}</p>
       
    </div>
    </Link>
    )
    }
    
    </>
  )
}
