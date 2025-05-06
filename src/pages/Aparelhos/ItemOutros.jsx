import React from 'react'
import './Aparelhos.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import comfir from '../../assets/Confirmar.svg'
import excluir from '../../assets/Excluir.svg'
import Input from '../../components/Input/Input'
import Logo from '../../components/Logo/Logo'
const ItemOutros = () => {
    const [nome, setName] = useState("")
    const [preco, setPreco] = useState("")
    const [Compl, setCompl] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando forms")
        console.log(nome, preco, Compl)
        setName("")
        setPreco("")
        setCompl("")
    }

    return (
        <main>
            <section>


                <div>
                    <Logo />
                    <h1>Salvar Outros</h1>
                    <form onSubmit={handleSubmit}>
                        <Input

                            func="Nome do Servico"
                            type="text"
                            placeholder="Nome do Servico"
                        />
                        <Input

                            func="Valor total do Servico"
                            type="number"
                            placeholder="R$: 00,00"
                        />

                        <Input

                            func="Complemento"
                            type="text"
                            placeholder="Ex: tipo"
                        />
                        
                        <div className='justify-content: space-around;'>
                            <Link to="/Luz"><button className='buttonsp ' type='button'><img src={comfir} alt="img" /></button></Link>
                            <Link to="/Luz"><button className='buttonsp ' type='button'><img src={excluir} alt="img" /></button></Link>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}
export default ItemOutros
