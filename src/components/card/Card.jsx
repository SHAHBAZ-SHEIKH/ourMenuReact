import 'bootstrap/dist/css/bootstrap.min.css';

function Card({ card }) {
    console.log(card)
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-6">
            <div className="cardMain">
                <div className="card">
                    <img src={card.itemImage}  alt={card.itemName} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{card.itemName}</h5>
                    <p className="card-text">{card.itemDesc}</p>
                    <p className="card-text">{card.itemPrice}</p>
                </div>

            </div>
        </div>


    )
}

export default Card;