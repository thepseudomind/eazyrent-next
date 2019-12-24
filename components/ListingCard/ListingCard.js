const ListingCard = (listing)=>{
    return (
        <div>
            <div className="listing-card">
                <div className="listing-card__img-box"><img src={listing.image} alt={listing.name} className="listing-card__img"/></div>
                <div className="listing-card__text">
                    <h3 className="listing-card__text--name">{listing.name}</h3>
                    <p className="listing-card__text--address">{listing.address}</p>
                    <div className="listing-card__text--details">
                        <span className="listing-card__icons">2<img src="/img/bed.png" alt="bedrooms" className="listing-card__icon"/></span>
                        <span className="listing-card__icons">2<img src="/img/bathtub.png" alt="bathrooms" className="listing-card__icon"/></span>
                        <span className="listing-card__icons">Good<img src="img/road.png" alt="roads" className="listing-card__icon"/></span>
                        <span className="listing-card__icons">Great<img src="/img/electricity.png" alt="lectricity" className="listing-card__icon"/></span>
                    </div>
                </div>
                <div className="listing-card__details">
                    <h3 className="listing-card__details--price">₦{listing.price}</h3>
                    <p className="listing-card__details--type">{listing.type}</p>
                    <a href="/" className="listing-card__btn">View</a>
                </div>
            </div>
            <style jsx>
                {`
                    .listing-card{
                        width: 100%;
                        padding: 2rem 0;
                        margin-bottom: 1.5rem;
                        background-color: white;
                        border-radius: 2rem;
                        box-shadow: .3rem .3rem .5rem #d6d6d6;
                        border: .1rem solid #fdf4eb;
                        display: flex;
                        justify-content: space-evenly;
                        align-items: center;
                        cursor: pointer;
                        transition: all .2s ease;
                    }
                    
                    .listing-card:hover{
                        background:linear-gradient(to right bottom, #f2994a 0%,#f2c94c 100% );
                        border: .1rem solid #f2c94c ;
                    }
                    
                    .listing-card:hover .listing-card__text, .listing-card:hover .listing-card__details, .listing-card:hover .listing-card__text--name{
                        color: white;
                    }
                    
                    .listing-card:hover .listing-card__icon{
                        opacity: 1;
                    }
                    
                    .listing-card:hover .listing-card__btn{
                        color: #683507;
                        background-color: white;
                    }
                    
                    .listing-card__img{
                        width: 100%;
                        border-radius: .5rem;
                    }
                    
                    .listing-card__img-box{
                        flex: 0 0 30%;
                    }
                    
                    .listing-card__text{
                        /* height: 12.5rem; */
                        flex: 0 0 30%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        color:#683507;
                        transition: all .2s ease;
                    }
                    
                    .listing-card__text > *:not(:last-child){
                        margin-bottom: 1rem;
                    }
                    
                    .listing-card__text--name{
                        font-size: 3rem;
                        font-weight: 700;
                    }
                    
                    .listing-card__text--address{
                        font-size: 1.5rem;
                    }
                    
                    .listing-card__text--details{
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-end;
                    }
                    
                    .listing-card__icons{
                        display: flex;
                        align-items: center;
                        font-size: 1.5rem;
                    }
                    
                    .listing-card__icon{
                        width: 2.5rem;
                        margin-left: .75rem;
                        opacity: .5;
                        transition: all .3s ease;
                    }
                    
                    .listing-card__details{
                        height: 10rem;
                        flex: 0 0 30%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: flex-end;
                        color: #683507;
                        transition: all .2s ease;
                    }
                    
                    .listing-card__details--price{
                        margin-top: -.5rem;
                        font-size: 3rem;
                        font-weight: 500;
                        /* color: red; */
                    }
                    
                    .listing-card__details--type{
                        margin-top: -1rem;
                        margin-right: .25rem;
                        font-size: 1rem;
                        font-weight: 600;
                    }
                    
                    
                    .listing-card__btn{
                        color: white;
                    }
                    
                    .listing-card__btn:link, .listing-card__btn:active{
                        margin-top: 2rem;
                        font-size: 1.5rem;
                        font-weight: 600;
                        display: inline-block;
                        text-decoration: none;
                        background-color: #683507;
                        box-shadow: 0 .2rem 1rem #565656;
                        border-radius: .5rem;
                        padding: 1rem 2.5rem;
                    }
                `}
            </style>
        </div>
    );
}

export default ListingCard;