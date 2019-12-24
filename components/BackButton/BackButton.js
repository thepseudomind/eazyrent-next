import Link from 'next/link';

const BackButton = ({text, route})=>{
    return (
        <div>
            <div>
                {
                    (text) ? <Link href={(route) ? route: '/'}><a className="app__main--back"><span className="app__main--back-button">&larr;</span>{text}</a></Link> :
                    <Link href={(route) ? route: '/'}><a className="app__main--back--notext"><span className="app__main--back-button">&larr;</span>{text}</a></Link>
                }
            </div>
            <style jsx>
                {`
                    .app__main--back{
                        color: black;
                    }
                    
                    .app__main--back:link, .app__main--back:active{
                        text-decoration: none;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        width: 18rem;
                        font-size: 1.75rem;
                        font-weight: 500;
                    }
                    
                    .app__main--back--notext:link, .app__main--back--notext:active{
                        text-decoration: none;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        width: 18rem;
                        font-size: 1.75rem;
                        font-weight: 500;
                    }
                    
                    .app__main--back-button{
                        font-size: 3rem;
                        background-clip: text;
                        -webkit-background-clip: text;
                        color: transparent;
                        background-image:linear-gradient(to right bottom, #f2994a 0%,#f2c94c 50%, #f2994a 100% );
                    }
                `}
            </style>
        </div>
    );
}

export default BackButton;