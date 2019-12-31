const DescriptionForm = ({description})=>{
    return (
        <div>
            <form className="description-form">
               <textarea className="description-form__input" id="description" placeholder="House description goes here" defaultValue={description ? description : ''}></textarea>
               <label className="description-form__label" htmlFor="city">description</label>
            </form>
            <style jsx>
                {`
                    .description-form{
                        width: 30rem;
                        display: flex;
                        flex-direction: column-reverse;
                    }

                    .description-form__label{
                        color:black;
                        font-size: 1.1rem;
                        text-transform: capitalize;
                        margin-bottom: .5rem;
                    }
                    
                    .description-form__input{
                        width: inherit;
                        height: 15rem;
                        padding: 1.25rem 2rem;
                        border-radius: .5rem;
                        border: .2rem solid #e8edf7;
                        font-family: 'Quicksand', sans-serif;
                        font-size: 1.5rem;
                    }

                    .description-form__input::-webkit-input-placeholder{
                        color: #e8edf7;
                    }

                    .description-form__input:focus{
                        outline: none;
                        border: .2rem solid #f2994a ;
                    }
                `}
            </style>
        </div>
    )
}

export default DescriptionForm;