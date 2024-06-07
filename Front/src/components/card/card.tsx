import "./card.css";

interface CardProps {
    id?: number,
    title: string,
    release_year: number,
    description: string,
    image: string
}

export function Card({ id, title, release_year, description, image } : CardProps){
    return(
        <div className="card">
            <img src={image}/>
            <h2>{title}</h2>
            <p><b>Release Year:</b>{release_year}</p>
            <p>{description}</p>
        </div>
    )
}