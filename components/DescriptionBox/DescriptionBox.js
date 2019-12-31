const DescriptionBox = ({description})=>{
    return (
        <div>
                <div className="description-box">
                <h1 className="description-box__title">
                    description
                </h1>
                <p className="description-box__subtitle">{description}</p>
            </div>
            <style jsx>
                {`
                    .description-box{
                        // flex: 0 0 45%;
                        width: 35rem;
                        display: flex;
                        flex-direction: column;
                    }
                    
                    .description-box__title{
                        align-self: flex-start;
                        font-size: 1.5rem;
                        font-weight: 600;
                        text-transform: uppercase;
                        border-bottom: .1rem solid #f2994a;
                        color:black;
                        background-clip: text;
                        -webkit-background-clip: text;
                        color: transparent;
                        background-image:linear-gradient(to right bottom, #f2994a 0%,#f2c94c 50%, #f2994a 100% );
                    }
                    
                    .description-box__subtitle{
                        margin-top: 1rem;
                        font-size: 1.75rem;   
                    }
                `}
            </style>
        </div>
    );
}

export default DescriptionBox;