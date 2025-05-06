import React from 'react'
import './Endereco.css'
import ItemmenuE from '../../components/Itemmenuedit/Itemmenuedit'
import luz from '../../assets/LuzW.svg'
import agua from '../../assets/AguaW.svg'
import gas from '../../assets/GasW.svg'
import compras from '../../assets/ComprasW.svg'
import outros from '../../assets/OutrosW.svg'
import novo from '../../assets/Add.svg'
import {Link} from 'react-router-dom'
import Logo from "../../components/Logo/Logo"
import { useEffect } from 'react'

import { useState } from 'react'
const Endereco = () => {
 
  return (
    <main>
      <section>
        <div>
          <section >
            <Logo/>
            <h1>Endereco: {}</h1>
            <div className="item">
              <ItemmenuE
                img={luz}
                gastos='R$ 28493'
                data='total'
                link="/Luz"
              /></div>
              <div className="item">
              <ItemmenuE
                img={agua}
                gastos='R$ 28493'
                data='total'
                link="/Agua"
              /></div>
              <div className="item">
              <ItemmenuE
                img={gas}
                gastos='R$ 28493'
                data='hoje'
                link="/Gas"
              /></div>
              <div className="item">
              <ItemmenuE
                img={compras}
                gastos='R$ 28493'
                data='hoje'
                link="/Compras"
              /></div>
              <div className="item">
              <ItemmenuE
                img={outros}
                gastos='R$ 28493'
                data='hoje'
                link="/Outros"
              /></div>
          </section>
        </div>        
      </section>
    </main>
  )
}

export default Endereco