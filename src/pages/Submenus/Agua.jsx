import React, { useEffect } from 'react'

import { useState } from 'react'

import AguaMap from './AguaMap'
const Agua = () => {
  const [AparelhosAgua, setAparelhosAgua] = useState([])
  const [nome, setName] = useState("")
  const [vazao, setVazao] = useState("")
  const [tempuso, setTempuso] = useState("")
  const aparelhoAgua = {
      "nome": "",
      "vazao": 0,
      "tempouso": null
  }
  useEffect(() => {

    fetch("http://localhost:8090/enderecos/aparelhos/agua/listar", {//metodo get
        method: "get",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }

    })

        .then((res) => res.json())
        .then((data) => {
          
            setAparelhosAgua(data)
        })
        .catch((err) => alert(err))

}, [])

  return (
    <div>
    <AguaMap vetor={AparelhosAgua} /> 
 </div>
  )
}
export default Agua