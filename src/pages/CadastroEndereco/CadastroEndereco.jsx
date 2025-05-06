import React from 'react'
import './CadastroEndereco.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../components/Logo/Logo"
import User from "../../assets/user.svg"
import Lock from "../../assets/lock.svg"
import Input from '../../components/Input/Input'
import comfir from '../../assets/Confirmar.svg'
import excluir from '../../assets/Excluir.svg'
const CadastroEndereco = () => {
    const [cep, setCEP] = useState("")
    const [cidade, setCidade] = useState("")
    const [bairro, setBairro] = useState("")
    const [rua, setRua] = useState("")
    const [Numbr, setNumbr] = useState("")
    const [Compl, setCompl] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando forms")
        console.log(cep, cidade, bairro, rua, Numbr, Compl)
        setCEP("")
        setCidade("")
        setBairro("")
        setRua("")
        setNumbr("")
        setCompl("")
    }

    return (
        <main>
            <section>
                <Logo />
                <h1>Salvar Endereco</h1>

                <div>
                    <form onSubmit={handleSubmit}>
                        <Input

                            func="CEP"
                            type="number"
                            placeholder="xxxxx-xxx"
                        />
                        <Input

                            func="Cidade"
                            type="text"
                            placeholder="São paulo"
                        />
                       
                        <Input

                            func="Bairro"
                            type="text"
                            placeholder="Jardim laranjeira"
                        />
                        <Input

                            func="Rua"
                            type="text"
                            placeholder="Travessa dos anjos"
                        />
                        <Input

                            func="N°"
                            type="number"
                            placeholder="21"
                        />
                        <Input

                            func="Complemento"
                            type="text"
                            placeholder="Ex:jardim laranjeira"
                        />
                     

                    
                      

                        <div className='justify-content: space-around;'>
                            <Link to="/Menu"><button className='buttonsp ' type='button'><img src={comfir} alt="img" /></button></Link>
                            <Link to="/Menu"><button className='buttonsp ' type='button'><img src={excluir} alt="img" /></button></Link>
                        </div>
                    </form>

                </div>
            </section>
        </main>



    )
}

export default CadastroEndereco
