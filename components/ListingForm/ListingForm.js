const ListingForm = ()=>{
    return (
        <div>
            <div className="listing-form">
                <h1 className="listing-form__title">Add new home</h1>
                <form>
                    <div className="listing-form__form">
                        <input type="text" className="listing-form__input" placeholder="2 bedroom flat" id="title"/>
                        <label className="listing-form__label" htmlFor="title">title</label>
                    </div>
                    <div className="listing-form__form">
                        <input type="text" className="listing-form__input" placeholder="56, Bolanle Avenue" id="address"/>
                        <label className="listing-form__label" htmlFor="address">address</label>
                    </div>
                    <div className="listing-form__row">
                        <div className="listing-form__col">
                            <input type="number" className="listing-form__price" placeholder="250000" id="price"/>
                            <label className="listing-form__label" htmlFor="price">price</label>
                        </div>
                        <div className="listing-form__col">
                            <select className="listing-form__type" placeholder="Choose one" id="payment">
                                <option value="none">Choose one</option>
                                <option value="monthly">Monthly</option>
                                <option value="yearly">Yearly</option>
                            </select>
                            <label className="listing-form__label" htmlFor="payment">payment type</label>
                        </div>
                    </div>
                    <div className="listing-form__row">
                        <div className="listing-form__col">
                            <select className="listing-form__type" placeholder="Bedrooms" id="state">
                                <option value="none">Choose one</option>
                                <option value="1">Lagos</option>
                                <option value="2">Abuja</option>
                                <option value="3">Ogun</option>
                                <option value="4">Port Harcourt</option>
                                <option value="5">Oyo</option>
                            </select>
                            <label className="listing-form__label" htmlFor="state">state</label>
                        </div>
                        <div className="listing-form__col">
                            <select className="listing-form__type" placeholder="Bedrooms" id="city">
                                <option value="none">Choose one</option>
                                <option value="1">Ikeja</option>
                                <option value="2">Victoria Island</option>
                                <option value="3">Yaba</option>
                            </select>
                            <label className="listing-form__label" htmlFor="city">city</label>
                        </div>
                    </div>
                    <div className="listing-form__row">
                        <div className="listing-form__col">
                            <select className="listing-form__type" placeholder="Bedrooms" id="beds">
                                <option value="none">Choose one</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <label className="listing-form__label" htmlFor="beds">no of bedrooms</label>
                        </div>
                        <div className="listing-form__col">
                            <select className="listing-form__type" placeholder="Bedrooms" id="baths">
                                <option value="none">Choose one</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <label className="listing-form__label" htmlFor="baths">no of bathrooms</label>
                        </div>
                    </div>
                    <div className="listing-form__footer"><a href="#" className="listing-form__btn">Add new home</a></div>
                </form>
            </div>
            <style jsx>
                {`
                    .listing-form{
                        width: 45rem;
                    }
                    
                    .listing-form__title{
                        font-size: 3.5rem;
                        margin-bottom: 2rem;
                    }
                    
                    .listing-form__form{
                        margin: 0 auto;
                        width: inherit;
                        margin-bottom: 1.5rem;
                        display: flex;
                        flex-direction: column-reverse;
                    }
                    
                    .listing-form__label{
                        color:black;
                        font-size: 1.1rem;
                        text-transform: capitalize;
                        margin-bottom: .5rem;
                    }
                    
                    .listing-form__input, .listing-form__price{
                        width: inherit;
                        padding: 1.25rem 2rem;
                        border-radius: .5rem;
                        border: .2rem solid #e8edf7;
                        font-family: 'Quicksand', sans-serif;
                        font-size: 1.5rem;
                    }
                    
                    .listing-form__input:focus, .listing-form__price:focus, .listing-form__type:focus{
                        outline: none;
                        border: .2rem solid #f2994a ;
                    }
                    
                    /* .listing-form__input:focus + .listing-form__label{
                        color: #f2994a ;
                    } */
                    
                    .listing-form__input::-webkit-input-placeholder, .listing-form__price::-webkit-input-placeholder{
                        color: #e8edf7;
                    }
                    
                    .listing-form__row{
                        margin: 0 auto;
                        width: 45rem;
                        margin-bottom: 1.5rem;
                        display: flex;
                        justify-content: space-between;
                    }
                    
                    .listing-form__col{
                        flex: 0 0 47%;
                        display: flex;
                        flex-direction: column-reverse;
                    }
                    
                    .listing-form__type{
                        height: 4.6rem;
                        border-radius: .5rem;
                        background-color: white;
                        border: .2rem solid #e8edf7;
                        font-family: 'Quicksand', sans-serif;
                        font-size: 1.75rem;
                        cursor: pointer;
                    }
                    
                    .listing-form__footer{
                        margin-top: 3rem;
                        display: flex;
                        justify-content: center;
                    }
                    
                    .listing-form__btn{
                        color: white;
                    }
                    
                    .listing-form__btn:active, .listing-form__btn:link{
                        display: inline-block;
                        text-decoration: none;
                        margin: 0 auto;
                        font-size: 1.5rem;
                        padding: 1.25rem 2.5rem;
                        background-color: #f2994a;
                        border-radius: .5rem;
                        background:linear-gradient(90deg, #f2994a 0%,#f2c94c 100% );
                    }
                `}
            </style>
        </div>
    );
}

export default ListingForm;