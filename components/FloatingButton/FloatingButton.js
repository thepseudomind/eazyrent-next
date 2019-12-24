const FloatingButton = ({changeForm, showAlert})=>{
    return (
        <span>
            <a href="#" className="floating-button" onClick={()=>{
                showAlert('');
                changeForm('add');
            }}><span className="floating-button__icon">+</span></a>
            <style jsx>
                {`
                    .floating-button{
                        color: black;
                    }
                    
                    .floating-button:link, .floating-button:link:active{
                        position: fixed;
                        text-decoration: none;
                        bottom: 2rem;
                        right: 2rem;
                        height: 6rem;
                        width: 6rem;
                        border-radius: 50%;
                        background-color: white;
                        box-shadow: 0 .2rem 3rem rgba(0, 0, 0, 0.8);
                        cursor: pointer;
                        transition: all .2s ease;
                        display: flex;
                        justify-content: center;
                        /* align-items: center; */
                    }
                    
                    .floating-button__icon{
                        font-size: 4rem;
                        color: transparent;
                        background-clip: text;
                        -webkit-background-clip: text;
                        background-image:linear-gradient(90deg, #f2994a 0%,#f2c94c 100% );
                    }
                `}
            </style>
        </span>
    );
}

export default FloatingButton;