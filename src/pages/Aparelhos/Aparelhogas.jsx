import React from 'react'
import './Aparelhos.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import comfir from '../../assets/Confirmar.svg'
import excluir from '../../assets/Excluir.svg'
import Logo from '../../components/Logo/Logo'
import Input from '../../components/Input/Input'
const Aparelhogas = () => {
    const [nome, setName] = useState("")
    const [vazao, setVazao] = useState("")
    const [tempuso, setTempuso] = useState("")


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
                <h1>Salvar Aparelho de gás</h1>

                <div>
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
                            <Link to="/Gas"><button className='buttonsp ' type='button'><img src={comfir} alt="img" /></button></Link>
                            <Link to="/Gas"><button className='buttonsp ' type='button'><img src={excluir} alt="img" /></button></Link>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}
export default Aparelhogas
