import React from 'react'

const Api = () => {
    let url ="http://localhost:8090"
    useEffect(() => {

        fetch(url+"/enderecos/aparelhos/agua/listar", {//metodo get
            method: "get",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            }

        })

            .then((res) => res.json())
            .then((data) => {
                let body = JSON.stringify(data)
                setAparelhosAgua(body)
            })
            .catch((err) => alert(err))

    }, [])
    }

    function cadastro(){
        fetch(url,{
            method:"POST",
            headers:{
                "Content-type": "application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify({ // colocar os dados do usestate aqui
                "cep":222445
            })

            })
            .then((res) => res.json())
            .then((data) => {
                let body = JSON.stringify(data)
                document.write(body)
            })
            .catch((err)=>alert(err))
                
        .catch((err)=>alert(err))
    }
  return (
    <div>Api</div>
  )



export default Api