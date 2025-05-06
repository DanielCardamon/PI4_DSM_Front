import React, { useEffect } from 'react'
import './Aparelhos.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import comfir from '../../assets/Confirmar.svg'
import excluir from '../../assets/Excluir.svg'
import Input from '../../components/Input/Input'
import Logo from '../../components/Logo/Logo'
import ItemmenuE from '../../components/Itemmenuedit/Itemmenuedit'
import agua from '../../assets/AguaW.svg'
import Agua from "../Submenus/Agua"
const AparelhoAgua = () => {
    const [AparelhosAgua, setAparelhosAgua] = useState([])
    const [nome, setName] = useState("")
    const [vazao, setVazao] = useState("")
    const [tempuso, setTempuso] = useState("")
    const aparelhoAgua = {
   
        "valorAparelhoAgua": 0,
        "vazaoAgua":0,
        "tempoUsoAgua": null,
        "nomeAparelhoAgua": ""
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando forms")
        console.log(nome, vazao, tempuso)
        setName("")
        setVazao("")
        setTempuso("")
    }
  

    return (
        <main>
            <section>
                <Logo />
                <h1>Salvar Aparelho de água</h1>
                

                <form onSubmit={handleSubmit}>

                    <Input

                        func="Nome do aparelho"
                        type="text"
                        placeholder="Nome do aparelho"
                    />
                    <Input

                        func="Vazão do aparelho (L/M)"
                        type="number"
                        placeholder="W"
                    />

                    <Input id="tempo"

                        func="Tempo de uso diário do Aparelho(h)"
                        type="time"
                        placeholder="Potencia do aparelho"
                    />
                    
             
              

                    <div className='justify-content: space-around;'>
                        <Link to="/Agua"><button className='buttonsp ' type='button'><img src={comfir} alt="img" /></button></Link>
                        <Link to="/Agua"><button  className='buttonsp ' type='button'><img src={excluir} alt="img" /></button></Link>
                    </div>
                </form>

            </section>
        </main>
    )
}
export default AparelhoAgua
