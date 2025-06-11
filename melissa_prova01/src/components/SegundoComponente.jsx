import { carros } from "../dados_carro"

export default function SegundoComponente() {

    /*a funcao abaixo vai pegar uma lista de carros como parâmetro e retornar os que são vermelhos*/
    function verCarrosVermelhos(listaDeCarros) {
        return listaDeCarros.cor == 'vermelho'
    }

    /*o filter vai pegar o filtro definido e retornar a lista dos carros desejados*/
    const carros_vermelhos = carros.filter(verCarrosVermelhos) 
    return (
        <>
            {/* o map abaixo vai servir como um for para exibir os itens dos arrays */}
            <h3>Primeira lista:</h3>
            {carros.map((carro) => (
                <p key={carro.id}>{carro.modelo} ({carro.ano})</p>
            ))}

            <h3>Segunda lista:</h3>
            {carros_vermelhos.map((carro) => (
                <p key={carro.id}>{carro.modelo} ({carro.ano})</p>
            ))}
        </>
    )
}