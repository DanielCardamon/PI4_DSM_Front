import React from 'react'
import './Submenu.css'
import ItemmenuE from '../../components/Itemmenuedit/Itemmenuedit'
import luz from '../../assets/LuzW.svg'
import aparelho from '../../assets/Aparelho.svg'
import gas from '../../assets/GasW.svg'
import novo from '../../assets/Add.svg'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import GasMap from './GasMap'
import { useState } from 'react'
import Logo from '../../components/Logo/Logo'
const Gas = () => {
  const [AparelhosGas, setAparelhosGas] = useState([])
  useEffect(() => {

    fetch("http://localhost:8090/enderecos/aparelhos/eletricos/listar", {//metodo get
        method: "get",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
  
    })
  
        .then((res) => res.json())
        .then((data) => {
          
            setAparelhosGas(data)
        })
        .catch((err) => alert(err))
  
  }, [])
  return (
    <main>
      <section>
     
        <div>
    <GasMap vetor={AparelhosGas} /> 
 </div>
        

       
      </section>
    </main>
  )
}

export default Gas