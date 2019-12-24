const DetailBox = ({listing})=>{
    return (
        <div>
            <div className="detail-box">
                <h1 className="detail-box__title">{listing.name}</h1>
                <p className="detail-box__summary">Summary</p>
                <div className="detail-box__details">
                    <div className="detail-box__info">
                        <p className="detail-box__info--title">Rent type</p>
                        <p className="detail-box__info--subtitle">{listing.type}</p>
                    </div>
                    <div className="detail-box__info">
                        <p className="detail-box__info--title">Price</p>
                        <p className="detail-box__info--subtitle">{listing.price}</p>
                    </div>
                    <div className="detail-box__info">
                        <p className="detail-box__info--title">Location</p>
                        <p className="detail-box__info--subtitle">Ketu, Lagos</p>
                    </div>
                </div>
                <div className="detail-box__details">
                    <div className="detail-box__info">
                        <p className="detail-box__info--title">Bedrooms</p>
                        <p className="detail-box__info--subtitle">{listing.name[0]}</p>
                    </div>
                    <div className="detail-box__info">
                        <p className="detail-box__info--title">Bathrooms</p>
                        <p className="detail-box__info--subtitle">{listing.name[0]}</p>
                    </div>
                    <div className="detail-box__info">
                        <p className="detail-box__info--title">Road</p>
                        <p className="detail-box__info--subtitle">Good</p>
                    </div>
                </div>
                <div className="detail-box__details">
                    <div className="detail-box__address">
                        <p className="detail-box__address--title">Address</p>
                        <p className="detail-box__address--subtitle">{`21, Gbajabiamila street off Ikosi`}</p>
                    </div>
                    {/* <div className="detail-box__info">
                        <p className="detail-box__info--title">Furnished</p>
                        <p className="detail-box__info--subtitle">No</p>
                    </div>
                    <div className="detail-box__info">
                        <p className="detail-box__info--title">Electricity</p>
                        <p className="detail-box__info--subtitle">Moderate</p>
                    </div> */}
                </div>
                <div className="detail-box__buttons">
                    <span>Fav</span>
                    <span>Share</span>
                    <a href="/" className="detail-box__btn">Book now</a>
                </div>
            </div>
            <style jsx>
                {`
                    .detail-box{
                        height: 32.5rem;
                        // flex: 0 0 45%;
                        width: 40rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                    
                    .detail-box__title{
                        font-size: 3.5rem;
                        text-transform: capitalize;
                        color:black;
                        /* background-clip: text;
                        -webkit-background-clip: text;
                        color: transparent;
                        background-image:linear-gradient(to right bottom, #f2994a 0%,#f2c94c 50%, #f2994a 100% ); */
                    }
                    
                    .detail-box__summary{
                        align-self: flex-start;
                        font-size: 1.5rem;
                        font-weight: 600;
                        text-transform: uppercase;
                        border-bottom: .1rem solid #f2994a;
                        background-clip: text;
                        -webkit-background-clip: text;
                        color: transparent;
                        background-image:linear-gradient(to right bottom, #f2994a 0%,#f2c94c 50%, #f2994a 100% );
                    }
                    
                    .detail-box__details{
                        display: flex;
                        justify-content: space-between;
                    }
                    
                    .detail-box__info{
                        width: 30%;
                        display: flex;
                        flex-direction: column;
                        color: white;
                    }
                    
                    .detail-box__info--title, .detail-box__address--title{
                        font-size: 1.1rem;
                        color: #565656;
                    }
                    
                    .detail-box__info--subtitle, .detail-box__address--subtitle{
                        font-size: 2rem;
                        font-weight: 500;
                        text-transform: capitalize;
                        color: black;
                    }
                    
                    .detail-box__buttons{
                        width: 65%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    
                    .detail-box__btn{
                        color:white;
                    }
                    
                    .detail-box__btn:link, .detail-box__btn:active{
                        align-self: flex-start;
                        text-decoration: none;
                        display: inline-block;
                        font-size: 1.5rem;
                        padding: 1rem 2rem;
                        /* background-color: #f2994a; */
                        background:linear-gradient(90deg, #f2994a 0%,#f2c94c 100% );
                        border-radius: .5rem;
                    }
                `}
            </style>
        </div>
    );
}

export default DetailBox;