import React from 'react'
import './Aparelhos.css'
import { useState } from 'react'
import '../Login/Login.css'
import "../../App.css"

import Input from '../../components/Input/Input'
import { Link } from 'react-router-dom'
import comfir from '../../assets/Confirmar.svg'
import excluir from '../../assets/Excluir.svg'
import Logo from '../../components/Logo/Logo'

const AparelhoLuz = () => {

    const [aparelhoLuz, setAparelhoLuz] = useState([])

    const objAparelhoLuz = {
        "valorAparelho": 0,
        "potencia": 0,
        "tempoUsoEletrico": null,
        "nomeAparelho": ""

    }
    const [objAparelhosLuz, setObjAparelhosLuz] = useState(objAparelhoLuz)
    const cadastrarAparelhoLuz = () => {
       
        fetch("http://localhost:8090/enderecos/aparelhos/eletricos/cadastrar", {
            method: "Post",
            body: JSON.stringify(objAparelhosLuz),
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((res) => res.json())
            .then((data) => setAparelhoLuz([...aparelhoLuz, data]))
        alert("aparelho cadastrado com sucesso")
    }
    const aoDigitar = (e) => {
      
        setAparelhoLuz({...aparelhoLuz, [e.target.name]:e.target.value})
    }

 
    return (
        <main>
            <section>
                <Logo />
                <h1>Salvar Aparelho eletrico</h1>
<p>{JSON.stringify(objAparelhoLuz)}</p>
                <form >
                <Input
                        focus={aoDigitar}
                        nome="valorAparelho"
                        func="custo do aparelho"
                        type="number"
                        placeholder="R$:00.00"
                    />
                    <Input
                        focus={aoDigitar}
                        nome="potencia"
                        func="Potencia do aparelho (WATTS)"
                        type="number"
                        placeholder="W"
                    />
                      <Input id="tempo"
                        focus={aoDigitar}
                        nome ="tempoUsoEletrico"
                        func="Tempo de uso diário do Aparelho(h)"
                        type="time"
                        placeholder="Potencia do aparelho"
                    />
                
                       <Input
                        focus={aoDigitar}
                        func="Nome do aparelho"
                        type="text"
                        nome="nomeAparelho"
                        placeholder="Nome do aparelho"
                    />
                      




                    <div className='justify-content: space-around;'>
                        <Link to="/Luz"><button className='buttonsp ' type='button' onClick={cadastrarAparelhoLuz}><img src={comfir} alt="img" /></button></Link>
                        <Link to="/Luz"><button className='buttonsp ' type='button'><img src={excluir} alt="img" /></button></Link>
                    </div>
                </form>

            </section>
        </main>
    )
}
export default AparelhoLuz
