import { useState } from 'react';

const BotaoTema = () => {
    const [corDeFundo, setCorDeFundo] = useState('white');

    function handleClick() {
        // Altera a cor de fundo da tela
        setCorDeFundo(corDeFundo === 'white' ? 'black' : 'white');
    }

    // Aplica a cor de fundo diretamente no estilo do body
    document.body.style.backgroundColor = corDeFundo;

    return (
        <div>
            <button onClick={handleClick} className='botao-tema'>
                mudar tema
            </button>
        </div>
    );
}

export default BotaoTema;