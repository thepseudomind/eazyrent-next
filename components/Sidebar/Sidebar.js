import Link from 'next/link';

const Sidebar = ({route})=>{
    return (
        <section className="app__sidebar">
            <div className="app__sidebar--logo-box">
                <img src="/img/logo-test.png" alt="logo" className="app__sidebar--logo" />
            </div>
            <div className="app__sidebar--menu">
                <ul>
                    <li><Link href="/"><a className={`app__sidebar--menu--items ${route === "main" ? "active" : ""}`}><img src="/img/home.png" alt="home" className="app__sidebar--menu--icons"/>Home</a></Link></li>
                    <li><Link href="/listings"><a className={`app__sidebar--menu--items ${route === "listings" ? "active" : ""}`}><img src="/img/chart.png" alt="listing" className="app__sidebar--menu--icons"/>Listings</a></Link></li>
                    <li><Link href="/likes"><a className={`app__sidebar--menu--items ${route === "likes" ? "active" : ""}`}><img src="/img/like.png" alt="settings" className="app__sidebar--menu--icons"/> Likes</a></Link></li>
                    <li><Link href="/profile"><a className={`app__sidebar--menu--items ${route === "profile" ? "active" : ""}`}><img src="/img/man.png" alt="profile" className="app__sidebar--menu--icons"/>Profile</a></Link></li>
                    <li><Link href="/payment"><a className={`app__sidebar--menu--items ${route === "payment" ? "active" : ""}`}><img src="/img/payment.png" alt="payment" className="app__sidebar--menu--icons"/> Payments</a></Link></li>
                    <li><a href="/" className={`app__sidebar--menu--items`}><img src="/img/signout.png" alt="signout" className="app__sidebar--menu--icons"/> Log out</a></li>
                </ul>
            </div>
            <div className="app__sidebar--banner"></div>
            <style jsx>
                {`
                    .app__sidebar{
                        // height: 100%;
                        box-shadow: 0 0 5rem rgba(0, 0, 0, 0.1);
                        background-color: white;
                        flex: 0 0 20%;
                        display: flex;
                        position: sticky;
                        flex-direction: column;
                        justify-content: space-around;
                        align-items: center;
                        padding: 2rem 0;
                    }
                    
                    
                    /* .app__sidebar > *{
                        background-color: blue;
                    }
                    
                    .app__sidebar > *:not(:last-child){
                        margin-bottom: 2.5rem;
                    } */
                    
                    .app__sidebar--logo-box{
                        flex: 0 0 5%;
                        display: flex;
                        justify-content: center;
                    }
                    
                    .app__sidebar--logo{
                        width: 5rem;
                        height: 5rem;
                    }
                    
                    .app__sidebar--menu{
                        flex: 0 0 55%;
                        width: 100%;
                    }
                    
                    .app__sidebar--menu ul{
                        list-style: none;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                        align-items: center;
                    }
                    
                    .app__sidebar--menu li{
                        width: 100%;
                        display: flex;
                    }
                    
                    .app__sidebar--menu--items{
                        color:black;
                    }
                    
                    .app__sidebar--menu--icons{
                        width: 10%;
                        /* margin-right: 3rem; */
                        transform: translateY(-.3rem);
                        position: absolute;
                        left: 3rem;
                        opacity: .5;
                        /* transition: all .2s ease; */
                    }
                    
                    .app__sidebar--menu--items:link, .app__sidebar--menu--items:active{
                        width: 100%;
                        text-align: center;
                        display: inline-block;
                        text-decoration: none;
                        padding: 1rem 0;
                        font-size: 1.5rem;
                        border-top-right-radius: .3rem;
                        border-bottom-right-radius: .3rem;
                        border-right: .3rem solid transparent;
                        transition: all .3s ease;
                        position: relative;
                    }
                    
                    .app__sidebar--menu--items:hover, .app__sidebar--menu--items.active{
                        background-color: #f6f7f7;
                        /* border-right: .3rem solid purple; */
                        border-right: .3rem solid #f2994a ;
                    }
                    
                    .app__sidebar--menu--items:hover .app__sidebar--menu--icons, .app__sidebar--menu--items.active .app__sidebar--menu--icons{
                        opacity : .8;
                    }
                    
                    .app__sidebar--banner{
                        flex: 0 0 30%;
                        width: 70%;
                        border-radius: .5rem;
                        background:linear-gradient(90deg, #f2994a 0%,#f2c94c 100% );
                    }
                `}
            </style>
        </section>
    );
}

export default Sidebar;