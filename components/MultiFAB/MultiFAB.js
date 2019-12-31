const MultiFAB = ({editListing, deleteListing})=>{
    return (
        <div>
            <div className="multi-fab">
                <a href="/" className="floating-button" onClick={
                    (e)=>{
                        e.preventDefault();
                        editListing();
                    }
                }><img className="floating-button__icon" src="/img/edit.png"/></a>
                <a href="/" className="floating-button" onClick={
                    (e)=>{
                        e.preventDefault();
                        const id = window.location.href.slice(-1);
                        deleteListing(id);
                    }
                }><img className="floating-button__icon" src="/img/delete.png"/></a>
            </div>
            <style jsx>
                {`
                    .multi-fab{
                        position: fixed;
                        bottom: 2rem;
                        right: 2rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        // background-color: yellow;
                        height: 13.5rem;
                    }
                    
                    .floating-button{
                        color: black;
                    }
                    
                    .floating-button:link, .floating-button:link:active{
                        text-decoration: none;
                        height: 5.5rem;
                        width: 5.5rem;
                        border-radius: 50%;
                        background-color: white;
                        box-shadow: 0 .2rem 3rem rgba(0, 0, 0, 0.75);
                        cursor: pointer;
                        transition: all .2s ease;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .floating-button__icon{
                        width: 2.5rem;
                        height: 2.5rem;
                        // font-size: 2rem;
                        // color: transparent;
                        // background-clip: text;
                        // -webkit-background-clip: text;
                        // background-image:linear-gradient(90deg, #f2994a 0%,#f2c94c 100% );
                    }
                `}
            </style>
        </div>
    )
}

export default MultiFAB;