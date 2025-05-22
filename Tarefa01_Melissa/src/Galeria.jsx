import Children from './Children'
import Card from './Card'

const Galeria = () =>{
    let descricao = ''
    function handleClick(){
        return(
            console.log(personagem)
        )
    }
    return(
        <>
            <Children>
                <Card onClick={handleClick} personagem={'aang'}/>
                <Card onClick={handleClick} personagem={'sokka'}/>
                <Card onClick={handleClick} personagem={'zuko'}/>
                <Card onClick={handleClick} personagem={'katara'}/>
                <Card onClick={handleClick} personagem={'toph'}/>
                <Card onClick={handleClick} personagem={'appa'}/>
            </Children>

            <h1>{descricao}</h1>
        </>
    )
}

export default Galeria