import React from 'react'
import './Submenu.css'
import ItemmenuE from '../../components/Itemmenuedit/Itemmenuedit'
import luz from '../../assets/LuzW.svg'
import agua from '../../assets/AguaW.svg'

import novo from '../../assets/Add.svg'
import Logo from '../../components/Logo/Logo'
import { Link } from 'react-router-dom'
import aparelho from '../../assets/Aparelho.svg'

const LuzMap = ({ vetor }) => {
  
  return (
    <main>
      <section>
        <Logo />
        <h1>Aparelhos Eletricos</h1>
        <div>
          <section >
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
              nome={obj.nomeAparelho}
              gastos={obj.valorAparelho}
              data={obj.tempoUsoEletrico}
              link="/AparelhoLuz"
            /></div>
            ))}

          </section>
        </div>

        <Link to="/AparelhoLuz"><div id="sNovo"><img src={novo} alt="novo" className='novo' /></div></Link>
      </section>
    </main>
  )
}

export default LuzMap