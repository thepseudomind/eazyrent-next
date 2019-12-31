import Router from 'next/router';

const WelcomeBox = ()=>{
    return (
        <div>
            <div className="welcome-box">
                <h3 className="welcome-box__text">
                    <span className="welcome-box__text--title">Hi, Scarlett</span>
                    <span className="welcome-box__text--subtitle">what would you like to do today?</span>
                </h3>
                <div className="welcome-box__actions">
                    <div className="welcome-box__action welcome-box__action--1" onClick={()=>Router.push('/add-listing')}>
                        <span className="welcome-box__action--icon-box">
                            <img className="welcome-box__action--icon" src="/img/home-dash.png"/>
                        </span>
                        <p className="welcome-box__action--title">Post new home</p>
                    </div>
                    <div className="welcome-box__action  welcome-box__action--2" onClick={()=>Router.push('/payment')}>
                        <span className="welcome-box__action--icon-box">
                            <img className="welcome-box__action--icon" src="/img/money-bag.png"/>
                        </span>
                        <p className="welcome-box__action--title">Add new bank</p>
                    </div>
                    <div className="welcome-box__action  welcome-box__action--3" onClick={()=>Router.push('/profile')}>
                        <span className="welcome-box__action--icon-box">
                            <img className="welcome-box__action--icon" src="/img/edit.png"/>
                        </span>
                        <p className="welcome-box__action--title">Edit your profile</p>
                    </div>
                </div>
                <img src="/img/Finance.png" className="welcome-box__illustration"/>
                <span className="welcome-box__boxes welcome-box__boxes--1"></span>
                <span className="welcome-box__boxes welcome-box__boxes--2"></span>
                <span className="welcome-box__boxes welcome-box__boxes--3"></span>
            </div>
            <style jsx>
                {`
                    .welcome-box{
                        height: 25rem;
                        width: 100%;
                        border-radius: 2rem;
                        background-color: #FEECC8;
                        overflow: hidden;
                        position: relative;
                    }

                    .welcome-box__text{
                        position: absolute;
                        left: 5rem;
                        top: 40%;
                        transform: translateY(-50%);
                        width: 50%;
                        color: #C45A00;
                        z-index: 2;
                    }

                    .welcome-box__text--title{
                        display: block;
                        font-size: 5rem;
                    }

                    .welcome-box__text--subtitle{
                        // letter-spacing: .5rem;
                        font-size: 1.5rem;
                        text-transform: capitalize;
                    }

                    .welcome-box__illustration{
                        position: absolute;
                        top: -.5rem;
                        right: .5rem;
                        width: 45%;
                        z-index: 2;
                    }

                    .welcome-box__boxes{
                        display: inline-block;
                        height: 35rem;
                        width: 35rem;
                        border-radius: 5rem;
                        background-color: #fccc6d;
                        opacity: 0.6;
                        box-shadow: 0 0 5rem rgba(0, 0, 0, 0.1);
                        z-index: 1;
                    }

                    .welcome-box__boxes--1{
                        position: absolute;
                        top: -15rem;
                        transform: rotate(65deg);
                    }

                    .welcome-box__boxes--2{
                        position: absolute;
                        top: -20rem;
                        right: -20rem;
                        transform: rotate(120deg);
                    }

                    .welcome-box__boxes--3{
                        position: absolute;
                        bottom: -50rem;
                        right: 20%;
                        transform: rotate(335deg) translateY(-50%);
                    }

                    .welcome-box__actions{
                        position: absolute;
                        left: 5rem;
                        top: 75%;
                        transform: translateY(-50%);
                        width: 40rem;
                        height: 5rem;
                        z-index: 2;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .welcome-box__action{
                        background-color: orangered;
                        border-radius: 5rem;
                        height: 5rem;
                        width: 12rem;
                        display: flex;
                        align-items: center;
                        justify-content: space-evenly;
                        cursor: pointer;
                    }

                    .welcome-box__action--1{
                        background:linear-gradient(90deg, #ffe259 0%,#ffa751 100% );
                        background:linear-gradient(90deg, #603813 0%,#b29f94 100% );
                    }

                    .welcome-box__action--2{
                        background:linear-gradient(90deg, #ff4e50 0%,#f9d423 100% );
                        background:linear-gradient(90deg, #5c258d 0%,#4389a2 100% );
                    }

                    .welcome-box__action--3{
                        background:linear-gradient(90deg, #d38312 0%,#a83279 100% );
                    }

                    .welcome-box__action--icon-box{
                        display: inline-block;
                        background-color: white;
                        height: 4rem;
                        width: 4rem;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .welcome-box__action--icon{
                        width: 2.5rem;
                        height: 2.5rem;
                    }

                    .welcome-box__action--title{
                        color: white;
                        font-size: 1.2rem;
                        font-weight: 500;
                        width: 55%;
                        text-align: center;
                    }
                `}
            </style>
        </div>
    );
}

export default WelcomeBox;