

function Cards({data}){
    return (
        <div className="analyst-card">
            <img src={data.image} alt={data.name} />
            <h3>{data.name}</h3>
            <p>{data.quote}</p>
        </div>
    )
}

export default Cards;