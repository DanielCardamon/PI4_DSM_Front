import React from 'react'
import './Submenu.css'
import ItemmenuE from '../../components/Itemmenuedit/Itemmenuedit'

import agua from '../../assets/AguaW.svg'

import novo from '../../assets/Add.svg'
import Logo from '../../components/Logo/Logo'
import { Link } from 'react-router-dom'


const AguaMap = ({ vetor }) => {
  return (
    <main>
      <section>
        <Logo />
        <h1>Aparelhos de agua</h1>
        <div>
          <section >
            <div className="item">
              <ItemmenuE
                img={agua}
                gastos='R$ 28493'
                data='total'
                link="/AparelhoAgua"
              /></div>




            {vetor?.map((obj, indice) => (
            <div className="item">
            
            <ItemmenuE
            key={indice}
              img={agua}
              nome={obj.nomeAparelhoAgua}
              gastos={obj.valorAparelhoAgua}
              data={obj.tempoUsoAgua}
              link="/AparelhoAgua"
            /></div>
            ))}

          </section>
        </div>

        <Link to="/AparelhoAgua"><div id="sNovo"><img src={novo} alt="novo" className='novo' /></div></Link>
      </section>
    </main>
  )
}

export default AguaMap