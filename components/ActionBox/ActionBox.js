import Router from 'next/router';

const ActionBox = ({numberOfLikes, numberOfHomes})=>{
    return (
        <div>
            <h2 className="actions__title">overview</h2>
            <div className="actions">
                <div className="action-box" onClick={()=>Router.push('/listings')}>
                    <div className="action-box__content">
                        <img className="action-box__icon" src="/img/home-rent.png"/>
                        <p className="action-box__text">
                            <span className="action-box__text--title">Your homes</span>
                            <span  className="action-box__text--subtitle">{numberOfHomes}</span>
                        </p>
                    </div>
                </div>
                <div className="action-box" onClick={()=>Router.push('/likes')}>
                    <div className="action-box__content">
                        <img className="action-box__icon" src="/img/like.png"/>
                        <p className="action-box__text">
                            <span className="action-box__text--title">Liked Homes</span>
                            <span  className="action-box__text--subtitle">{numberOfLikes}</span>
                        </p>
                    </div>
                </div>
                <div className="action-box">
                    <div className="action-box__content">
                        <img className="action-box__icon" src="/img/paid.png"/>
                        <p className="action-box__text">
                            <span className="action-box__text--title">Rent Paid</span>
                            <span  className="action-box__text--subtitle">₦625,000</span>
                        </p>
                    </div>
                </div>
                <div className="action-box">
                    <div className="action-box__content">
                        <img className="action-box__icon" src="/img/payout.png"/>
                        <p className="action-box__text">
                            <span className="action-box__text--title">Payouts made</span>
                            <span  className="action-box__text--subtitle">₦1,350,000</span>
                        </p>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .actions{
                        margin-top: 1.5rem;
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                    }
                    
                    .actions__title{
                        margin-top: 5rem;
                        font-size: 1.5rem;
                        font-weight: 500;
                        text-transform: uppercase;
                    }

                    .action-box{
                        height: 10rem;
                        width: 19rem;
                        border-radius: 1rem;
                        background-color: white;
                        box-shadow: 0 .3rem 3rem rgba(0,0,0, 0.1);
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        position: relative;
                        overflow: hidden;
                        transition: all .2s ease;
                        // justify-content: center;
                    }

                    .action-box:hover{
                        background:linear-gradient(90deg, #f2994a 0%,#f2c94c 100% );
                    }

                    .action-box:hover .action-box__content, .action-box:hover .action-box__content .action-box__text--title{
                        color: white;
                    }

                    .action-box:hover .action-box__icon{
                        opacity: .1;
                        // transform: rotate(375deg);
                    }

                    .action-box__content{
                        margin-left: 2rem;
                        width: 70%;
                        z-index: 2;
                    }

                    .action-box__icon{
                        width: 9rem;
                        height: 9rem;
                        transform: rotate(345deg);
                        top: 0;
                        right: -.5rem;
                        opacity: .3;
                        z-index: 1;
                        position: absolute;
                        transition: all .2s ease;
                    }

                    .action-box__text--title{
                        display: block;
                        text-transform: uppercase;
                        font-size: 1.1rem;
                        font-weight: 500;
                        color: rgba(0,0,0, 0.5);
                    }

                    .action-box__text--subtitle{
                        font-size: 2.5rem;
                        font-weight: 600;
                    }

                    // .action-box--1{
                    //     background:linear-gradient(90deg, #d38312 0%,#a83279 100% );
                    // }

                    // .action-box--2{
                    //     background:linear-gradient(90deg, #ff4e50 0%,#f9d423 100% );
                    // }

                    // .action-box--3{
                    //     background:linear-gradient(90deg, #ffe259 0%,#ffa751 100% );
                    // }
                `}
            </style>
        </div>
    );
}

export default ActionBox;