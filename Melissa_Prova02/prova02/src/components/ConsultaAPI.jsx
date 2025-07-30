import { useEffect, useState } from "react"

export default function ConsultaAPI(){
    const [dados, setDados] = useState([])
    const [loading, setLoading] = useState(true)
    const [id, setId] = useState(0)


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(id)
        const consulta = async () =>{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id)
            const data = await response.json()
            console.log(data)
            setDados(data)
        }

        consulta()
    }

    const handleId = (e) =>{
        setId(e.target.value)
    }


    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
              const response = await fetch('https://jsonplaceholder.typicode.com/posts')
              const data = await response.json()
              setDados(data)
            } catch (error) {
              console.error("Erro ao buscar usuários:", error)
            } finally {
              setLoading(false)
            }
          }
      
          fetchUsuarios();
        }, []);
      
        if (loading) {
          return <p>Carregando...</p>;
        }


    return (
        <>

            <form onSubmit={handleSubmit}>
                <label>
                    ID
                    <input type="number" value={id} onChange={handleId} />
                </label>
                <button type="submit">Enviar</button>
            </form>


            <div>
                <h1>Lista de Usuários</h1>
                <ul>
                    {dados.map(dado => (
                        <li key={dado.id}>{dado.title}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}