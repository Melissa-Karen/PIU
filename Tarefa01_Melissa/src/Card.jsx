import "./Card.css"

export default function Card(props){
    return(
        <div className='card'>
            <figure>
                <img src={props.personagem + '.webp'} alt="Imagem abstrata de corrente" />
                <figcaption>{props.personagem}</figcaption>
            </figure>
        </div>
    )
}