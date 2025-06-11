import { useState } from "react"

export default function PrimeiroComponente() {

    /* define os useState do número exibido e das cores dos botões, que irão mudar conforme a interação do usuário */
    const [numero, setNumero] = useState(0)
    const [corBotaoAumento, setCorBotaoAumento] = useState('')
    const [corBotaoDecrescimo, setCorBotaoDecrescimo] = useState('')


    function aumentaUm() {
        setNumero(numero + 1)

        /*
        como o React não atualiza o valor antes da verificação abaixo, foi preciso fazer uma gambiarra.
        quando o valor for atualizado de 10 para 11, o React ainda vai verificar como se o número fosse 10,
        então foi preciso fazer a verificação se o número era maior que 9 (que só vai ser true depois que o
        usuário for passar do 10 para o 11)
        */
        if (numero >  9) {
            setCorBotaoAumento('lightGrey')
        }
    }

    function diminuiUm() {
        setNumero(numero - 1)

        /*
        aqui segue a mesma lógica do comentário acima. e isso pode ser comprovado com um console.log(numero)
        */
        if (numero <  1) {
            setCorBotaoDecrescimo('red')
        }
    }

    return (
        <>
            <p>{numero}</p>

            {
            /* aqui os botões seguem o mesmo padrão:
            - possuem um onClick para chamar suas respectivas funções de aumento e diminuição
            - têm sua cor de fundo definidas a partir do estado em que se encontar a propriedade,
              que vai mudar com os useStatedefinidos nas linhas 7 e 8
            */
            }
            <button onClick={aumentaUm} style={{backgroundColor: corBotaoAumento}}>Aumentar 1</button>
            <button onClick={diminuiUm} style={{backgroundColor: corBotaoDecrescimo}}>Diminuir 1</button>
        </>
    )
}