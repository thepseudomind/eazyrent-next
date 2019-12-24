const PaymentFormStyle = ()=>{
    return (
        <style jsx>
            {`
                .payment-bg{
                    // margin-top: 5rem;
                    width: 100%;
                    padding: 3.5rem 0;
                    color:white;
                    text-align: center;
                    border-radius: 2rem;
                    background:linear-gradient(90deg, #f2994a 0%,#f2c94c 100% );
                    transition: all .5s ease;
                }

                .payment-bg__text{
                    font-size: 1.5rem;
                    font-weight: 600;
                }
                
                .payment-form{
                    margin: 0 auto;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                
                .payment-form__row{
                    width: 85%;
                    margin: 0 auto;
                    color: white;
                    display: flex;
                    justify-content: space-between;
                }
                
                .payment-form__row:not(:last-child){
                    margin-bottom: 2rem;
                }

                .payment-form__header{
                    margin-bottom: 3.5rem; 
                }
                
                .payment-form__title{
                    font-size: 4rem;
                    text-transform: uppercase;
                }
                
                .payment-form__close:link, .payment-form__close:active{
                    display: inline-block;
                    text-decoration: none;
                    height: 5rem;
                    width: 5rem;
                    border-radius: 50%;
                    background-color: white;
                    box-shadow: 0 .5rem 3rem rgba(0, 0, 0, 0.2);
                    align-self: center;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                
                .payment-form__close:focus{
                    outline: none;
                    box-shadow: 0 .5rem 3rem #f2984a8e;
                }
                
                .payment-from__close--icon{
                    font-size: 2rem;
                    color: transparent;
                    background-clip: text;
                    -webkit-background-clip: text;
                    background-image:linear-gradient(90deg, #f2994a 0%,#f2c94c 100% );
                }
                
                .payment-form__form{
                    display: flex;
                    flex-direction: column;
                }
                
                .payment-form__form--input, .payment-form__form--select{
                    display: block;
                    font-family: 'Quicksand', sans-serif;
                    font-size: 1.8rem;
                    padding: 1rem 2.5rem;
                    width: 26.5rem;
                    border: .2rem solid #e8edf7;
                    border-radius: .5rem;
                    transition: all .2s ease;
                }
                
                .payment-form__form--select{
                    height: 100%;
                    width: 32rem;
                }
                
                .payment-form__form--input.invalid, .payment-form__form--select.invalid{
                    border: .2rem solid red;
                }
                
                .payment-form__form--input::placeholder, .payment-form__form--input::-moz-placeholder, .payment-form__form--input::-webkit-input-placeholder, .payment-form__form--input::-ms-input-placeholder{
                    /* font-family: 'Quicksand', sans-serif; */
                    font-size: 2rem;
                    color:#e8edf7;
                    color:red;
                    text-transform: capitalize;
                }
                
                .payment-form__form--input:focus, .payment-form__form--select:focus{
                    outline: none;
                    border: .2rem solid #f2994a ;
                }
                
                .payment-form__form--label{
                    color:rgba(0, 0, 0, 0.4);
                    font-size: 1.3rem;
                    font-weight: 600;
                    text-transform: capitalize;
                    margin-bottom: .5rem;
                    align-self: flex-start;
                    display: block;
                }
                
                .payment-form__form--error{
                    color:rgba(255, 0, 0, 0.4);
                    font-size: 1rem;
                    font-weight: 600;
                    text-transform: capitalize;
                    /* margin-top: .5rem; */
                    align-self: flex-start;
                    transition: all .2s ease;
                    opacity: 0;
                    visibility: hidden;
                }
                
                .payment-form__form--error.active{
                    opacity: 1;
                    visibility: visible;
                }
                
                .payment-form__btn{
                    color:white;
                }
                
                .payment-form__btn:link, .profile-form__btn:active{
                    margin-top: 2rem;
                    display: inline-block;
                    align-self: center;
                    text-decoration: none;
                    font-size: 1.5rem;
                    padding: 1.25rem 2.5rem;
                    border-radius: .5rem;
                    background:linear-gradient(90deg, #f2994a 0%,#f2c94c 100% );
                    box-shadow: 0 .5rem 3rem rgba(0, 0, 0, 0.3);
                }
            `}
        </style>
    );
}

export default PaymentFormStyle;