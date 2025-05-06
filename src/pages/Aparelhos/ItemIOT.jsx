import React from 'react'
import './Aparelhos.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import comfir from '../../assets/Confirmar.svg'
import excluir from '../../assets/Excluir.svg'

const ItemIOT = () => {
    const [humidade, setHum] = useState("")
    const [Luminosidade, setLum] = useState("")
    const [Temperatura, setTemp] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando forms")
        console.log(humidade, Luminosidade, Temperatura)
        setHum("")
        setLum("")
        setTemp("")
    }

    return (
        <main>
            <section className='menuback'>
                <div className="grid">
                    <div className="item">
                        <Itemmenu
                            img={null}
                            gastos='Humidade do solo'
                            data='30'
                        /></div>
                    <div className="item">
                        <Itemmenu
                            img={null}
                            gastos='Luminosidade'
                            data='10'
                        />
                    </div>
                </div>
                <div className="grid">
                    <div className="item"><Itemmenu
                        img={null}
                        gastos='Humidade do Ar'
                        data='10'
                    /></div>
                    <div className="item"><Itemmenu
                        img={null}
                        gastos='Temperatura'
                        data='26°C'
                    /></div>
                </div>
            </section>
            <div>
                <form onSubmit={handleSubmit}>
                    <p> <br /> </p>
                    <label>
                        <span>Humidade desejada da planta</span>
                        <input type='number' name='humidade' id='humidade' placeholder='Valor da humidade desejada'
                            onChange={(e) => setHum(e.target.value)} value={humidade} />
                    </label><p><br /> </p>
                    <label>
                        <span>Luminosidade desejada da planta</span>
                        <input type='number' name='Luminosidade' id='Luminosidade' placeholder='Valor da humidade desejada'
                            onChange={(e) => setLum(e.target.value)} value={Luminosidade} />
                    </label><p><br /> </p>
                    <label>
                        <span>Temperatura desejada da planta</span>
                        <input type='number' name='Temperatura' id='Temperatura' placeholder='Valor da humidade desejada'
                            onChange={(e) => setTemp(e.target.value)} value={Temperatura} />
                    </label><p><br /> </p>

                    <div className='justify-content: space-around;'>
                        <Link to="/Luz"><button className='buttonsp ' type='button'><img src={comfir} alt="img" /></button></Link>
                        <Link to="/Luz"><button className='buttonsp ' type='button'><img src={excluir} alt="img" /></button></Link>
                    </div>
                </form>
            </div>
        </main>
    )
}
export default ItemIOT
