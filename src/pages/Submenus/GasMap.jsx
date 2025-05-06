import React from 'react'
import './Submenu.css'
import ItemmenuE from '../../components/Itemmenuedit/Itemmenuedit'
import luz from '../../assets/LuzW.svg'

import gas from '../../assets/GasW.svg'
import novo from '../../assets/Add.svg'
import Logo from '../../components/Logo/Logo'
import { Link } from 'react-router-dom'
import aparelho from '../../assets/Aparelho.svg'

const GasMap = ({ vetor }) => {
  
  return (
    <main>
      <section>
        <Logo />
        <h1>Aparelhos de gás</h1>
      
            <div className="item">
              <ItemmenuE
                img={luz}
                gastos='R$ 28493'
                data='total'
                link="/AparelhoLuz"
              /></div>




            {vetor?.map((obj, indice) => (
            <div className="item">
            
            <ItemmenuE
            key={indice}
              img={luz}
              nome={obj.nomeAparelhoGas}
              gastos={obj.valorAparelhoGas}
              data={obj.tempoUso}
              link="/AparelhoLuz"
            /></div>
            ))}

         

        <Link to="/AparelhoLuz"><div id="sNovo"><img src={novo} alt="novo" className='novo' /></div></Link>
      </section>
    </main>
  )
}

export default GasMap