import Children from './Children'
import Card from './Card'

const Galeria = () =>{
    let personagem = ''
    function handleClick(personagem){
        return(
            personagem=personagem
        )
    }
    return(
        <>
            <Children>
                <Card onClick={handleClick('aang')} personagem={'aang'}/>
                <Card onClick={handleClick('sokka')} personagem={'sokka'}/>
                <Card onClick={handleClick('zuko')} personagem={'zuko'}/>
                <Card onClick={handleClick('katara')} personagem={'katara'}/>
                <Card onClick={handleClick('toph')} personagem={'toph'}/>
                <Card onClick={handleClick('appa')} personagem={'appa'}/>
            </Children>
            <h1>{personagem}</h1>
        </>
    )
}

export default Galeria