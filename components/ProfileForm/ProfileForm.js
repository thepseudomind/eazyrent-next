const ProfileForm = ()=>{
    return (
        <form className="profile-form">
            <div className="profile-form__row">
                <div className="profile-form__form">
                    <input type="input" placeholder="Joe" className="profile-form__form--input" id="name"/>
                    <label htmlFor="name" className="profile-form__form--label">name</label>
                </div>
                <div className="profile-form__form">
                    <input type="input" placeholder="Doe" className="profile-form__form--input" id="fullname"/>
                    <label htmlFor="fullname" className="profile-form__form--label">full name</label>
                </div>
            </div>
            <div className="profile-form__row">
                <div className="profile-form__form">
                    <input type="email" placeholder="john@doe@xyz.com" className="profile-form__form--input" id="email"/>
                    <label htmlFor="email" className="profile-form__form--label">Email address</label>
                </div>
                <div className="profile-form__form">
                    <input type="phone" placeholder="+2349080000000" className="profile-form__form--input" id="phone"/>
                    <label htmlFor="phone" className="profile-form__form--label">Phone Number</label>
                </div>
            </div>
            <div className="profile-form__row">
                <div className="profile-form__form">
                    <input type="input" placeholder="e.g. Lagos, Nigeria" className="profile-form__form--input" id="location"/>
                    <label htmlFor="location" className="profile-form__form--label">Location</label>
                </div>
                <div className="profile-form__form">
                    <input type="text" placeholder="100253" className="profile-form__form--input" id="postalcode"/>
                    <label htmlFor="postalcode" className="profile-form__form--label">Postal code</label>
                </div>
            </div>
            <a href='/' className="profile-form__btn">Save changes</a>
            <style jsx>
                {`
                    .profile-form{
                        width: 100%;
                        padding: 2rem 0;
                        color:white;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                    
                    .profile-form__row{
                        width: 90%;
                        margin: 0 auto;
                        color:white;
                        display: flex;
                        justify-content: space-between;
                    }
                    
                    .profile-form__row:not(:last-child){
                        margin-bottom: 3rem;
                    }
                    
                    .profile-form__form{
                        display: flex;
                        flex-direction: column-reverse;
                    }
                    
                    .profile-form__form--input{
                        display: block;
                        font-family: 'Quicksand', sans-serif;
                        font-size: 1.8rem;
                        padding: 1rem 2.5rem;
                        width: 30rem;
                        border: .2rem solid #e8edf7;
                        border-radius: .5rem;
                        transition: all .2s ease;
                    }
                    
                    .profile-form__form--input::placeholder, .profile-form__form--input::-moz-placeholder, .profile-form__form--input::-webkit-input-placeholder, .profile-form__form--input::-ms-input-placeholder{
                        /* font-family: 'Quicksand', sans-serif; */
                        font-size: 2rem;
                        color:#e8edf7;
                        color:red;
                        text-transform: capitalize;
                    }
                    
                    .profile-form__form--input:focus{
                        outline: none;
                        border: .2rem solid #f2994a ;
                    }
                    
                    .profile-form__form--label{
                        color:black;
                        font-size: 1.3rem;
                        text-transform: capitalize;
                        margin-bottom: .5rem;
                    }
                    
                    .profile-form__btn{
                        color:white;
                    }
                    
                    .profile-form__btn:link, .profile-form__btn:active{
                        margin-top: 2rem;
                        display: inline-block;
                        align-self: center;
                        text-decoration: none;
                        font-size: 1.5rem;
                        padding: 1.25rem 2.5rem;
                        border-radius: .5rem;
                        background:linear-gradient(90deg, #f2994a 0%,#f2c94c 100% );
                    }
                `}
            </style>
        </form>
    );
}

export default ProfileForm;