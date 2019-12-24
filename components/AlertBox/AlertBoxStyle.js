const AlertBoxStyle = ()=>{
    return (
        <style jsx>
            {`
                .alert-box{
                    position: absolute;
                    top: 3rem;
                    right: 3rem;
                    height: 4rem;
                    width: 25rem;
                    border-radius: .5rem;
                    background-color: white;
                    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
                    opacity: 0;
                    visibility: hidden;
                    animation: fadeInOut 2s none ease;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 2;
                }
                
                .alert-box__message{
                    font-size: 1.5rem;
                }
                
                @keyframes fadeInOut{
                    0%{
                        transform: translateY(-2rem);
                        opacity: 0;
                        visibility: hidden;
                    }
                
                    50%{
                        transform: translateY(0);
                        opacity: 1;
                        visibility: visible;
                    }
                
                    100%{
                        transform: translateY(0);
                        opacity: .5;
                        visibility: hidden;
                    }
                }
            `}
        </style>
    );
}

export default AlertBoxStyle;