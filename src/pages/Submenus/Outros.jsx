import React from 'react'
import './Submenu.css'
import ItemmenuE from '../../components/Itemmenuedit/Itemmenuedit'
import Logo from '../../components/Logo/Logo'
import outros from '../../assets/OutrosW.svg'

import novo from '../../assets/Add.svg'
import {Link} from 'react-router-dom'


const Outros = () => {
  return (
    <main>
      <section>
        <div>
          <section >
            <Logo/>
            <h1>Outros</h1>
            <div className="item">
              <ItemmenuE
                img={outros}
                gastos='R$ 28493'
                data='hoje'
                link="/ItemOutros"
              /></div>
              <div className="item">
              <ItemmenuE
                img={outros}
                gastos='R$ 28493'
                data='hoje'
                link="/ItemOutros"
              /></div>
              <div className="item">
              <ItemmenuE
                img={outros}
                gastos='R$ 28493'
                data='hoje'
                link="/ItemOutros"
              /></div>
              
              
          </section>
        </div>

        <Link to="/Outros"><div id="sNovo"><img src={novo} alt="novo" className='novo' /></div></Link>
      </section>
    </main>
  )
}

export default Outros