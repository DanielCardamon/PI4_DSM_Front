import React from 'react'
import arr from "../../assets/@.svg"
import '../Login/Login.css'
import "./Cadastro.css"
import Logo from "../../components/Logo/Logo"
import User from "../../assets/user.svg"
import Lock from "../../assets/lock.svg"
import "../../components/Input/Input.css"
import Data from "../../assets/lock.svg"
import { useState } from 'react'
import Input from "../../components/Input/Input"
import { TextLink } from '../../components/TextLink/TextLink'
import { Link } from 'react-router-dom'
const Cadastro = () => {
    const [nome, setName] = useState("")
    const [email, setEmail] = useState("")
    const [data, setData] = useState("")
    const [key, setKey] = useState("")
    const [Ckey, setCkey] = useState("")
    //onChange={(e) => setName(e.target.value)} value={nome} 
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando forms")
        console.log(nome, email)
        setName("")
        setEmail("")
        setData("")
        setKey("")
        setCkey("")
    }

    return (
        <main>
            <section>
                <Logo />
                <div>
                    <h1>
                        Formulário de Cadastro
                    </h1>
                </div>
            </section>
            <div>

                <form onSubmit={handleSubmit}>
                    <Input
                        func="Nome"
                        img={User}
                        alt='logo usuario'
                        type="text"
                        placeholder='Nome completo'

                    />
                    <Input
                        func="Cpf"
                        img={User}
                        alt='logo usuario'
                        type="number"
                        placeholder='000.000.000-00'

                    />
                    <Input
                        func="Email"
                        img={arr}
                        alt='arroba'
                        type="email"
                        placeholder='Nome@gmail.com'

                    />


                    <Input id="data"
                        func="Data de nascimento"
                        img={null}

                        type="date"
                        placeholder='Nome@gmail.com'


                    />
                    <Input
                        func="Senha"
                        img={Lock}
                        alt='cadeado'
                        type="password"
                        placeholder='*********'

                    />
                    <Input
                        func="confirmar Senha"
                        img={Lock}
                        alt='cadeado'
                        type="password"
                        placeholder='*********'

                    />

                    <TextLink span="Já possui uma conta?" link="/Login" texto="Entre" />
                    <Link to="/Menu"><button type='button' className='buttonsp enviar'>Enviar</button></Link>
                </form>

            </div>
        </main>



    )
}

export default Cadastro
