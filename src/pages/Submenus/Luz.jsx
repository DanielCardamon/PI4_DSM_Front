import React from 'react'
import './Submenu.css'
import ItemmenuE from '../../components/Itemmenuedit/Itemmenuedit'
import luz from '../../assets/LuzW.svg'
import aparelho from '../../assets/Aparelho.svg'
import Logo from '../../components/Logo/Logo'

import novo from '../../assets/Add.svg'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import LuzMap from './LuzMap'
import { useState } from 'react'

const Luz = () => {
  const [AparelhosLuz, setAparelhosLuz] = useState([])

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
        
          setAparelhosLuz(data)
      })
      .catch((err) => alert(err))

}, [])
  
  return (
    <main>
      <section>
      
       
           
             
           <div>
    <LuzMap vetor={AparelhosLuz} /> 
 </div>
            
        
        

       
      </section>
    </main>
  )
}

export default Luz