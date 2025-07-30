import { useState } from "react"

export default function Login(){
    const [PalavraPasse, setPalavraPasse] = useState('')
    const senha = "AlunoPIU"


    const handleSubmit = (e) => {
        e.preventDefault()
        if(PalavraPasse === senha) {
            document.body.style.backgroundColor = "rgb(186, 255, 186)";
        }
    }

    const handlePass = (e) =>{
        setPalavraPasse(e.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Login
                <input type="text" name="login" />
            </label>
            <label>
                Senha
                <input type="text" name="senha" value={PalavraPasse} onChange={handlePass}/>
            </label>

            <button type="submit">Enviar</button>
        </form>
    )
}