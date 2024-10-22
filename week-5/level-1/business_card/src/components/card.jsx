export function Card(props){
    return(
        <div className="card">
            <h1>{props.name}</h1>
            <div>{props.desc}</div>
            <h2>Interests</h2>
            <div>{props.interest}</div>
            <br></br>
            <a href={props.linkedin} class="button">LinkedIn</a>
            &ensp; &ensp;
            <a href={props.twitter} class="button">Twitter</a>
        </div>
    )
}