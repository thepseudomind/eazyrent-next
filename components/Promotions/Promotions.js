const Promotions = ()=>{
    return (
        <div>
            <div className="promotions">
                <h2 className="promotions__title">promotions</h2>
                <div className="promotions__banner">
                    <h1 className="promotions__banner--text">
                        <span className="promotions__banner--text--title">Promote your products and services on EazyRent...</span>
                        <span className="promotions__banner--text--subtitle">Reach over 500,000 users and get the much needed traction your business needs.</span>
                    </h1>
                    <a href="#" className="promotions__banner--link">Advertise with us</a>
                </div>
            </div>
            <style jsx>
                {`
                    .promotions{
                        margin-top: 5rem;
                    }
                    
                    .promotions__title{
                        font-size: 1.5rem;
                        font-weight: 500;
                        text-transform: uppercase;
                        margin-bottom: 2rem;
                    }

                    .promotions__banner{
                        width: 100%;
                        height: 18rem;
                        border-radius: 2rem;
                        background-color: #93ff93;
                        background-position: center;
                        background-size: cover;
                        background-image: url('/img/bg.png');
                        // background:linear-gradient(90deg, #f2994a 0%,#f2c94c 100% );
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        opacity: .8;
                    }

                    .promotions__banner--text{
                        flex: 0 0 50%;
                    }

                    .promotions__banner--text--title{
                        width: 90%;
                        display: inline-block;
                        font-size: 2.75rem;
                        line-height: 3rem;
                    }

                    .promotions__banner--text--subtitle{
                        margin-top: 1.5rem;
                        display: inline-block;
                        font-size: 1.5rem;
                        font-weight: 500;
                        line-height: 1.5rem;
                    }

                    .promotions__banner--link{
                        color: black;
                    }

                    .promotions__banner--link:link, .promotions__banner--link:active{
                        display: inline-block;
                        text-decoration: none;
                        font-size: 1.5rem;
                        font-weight: 500;
                        padding: 1.5rem 2.5rem;
                        background-color: white;
                    }

                    .promotions__banner--link:hover{
                        color: white;
                        background-color: black;
                    }
                `}
            </style>        
        </div>
    )
}

export default Promotions;