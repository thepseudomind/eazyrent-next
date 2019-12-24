import  { Component } from 'react';
import Meta from '../Meta/Meta';

class Auth extends Component{
    constructor(){
        super();
        this.state = {
            mode: 'signin',
            showPassword: false
        }   
    }

    showPassword = ()=>{
        this.setState({showPassword: !this.state.showPassword});
    }

    changeAuthMode = ()=>{
        if(this.state.mode === 'signin'){
            this.setState({mode: 'signup'})
        }else{
            this.setState({mode: 'signin'}) 
        }
    }

    render(){
        return (
            <div>
                <Meta pageTitle="Login/Signup - EazyRent"/>
                <div className="auth">
                    <div className="auth__main">
                        <div className="auth__main--logo-box">
                            <img src="/img/logo-test.png" className="auth__main--logo"/>
                        </div>
                        <div className="auth__main--content">
                            <h1 className="auth__main--content--title">
                                {this.state.mode === 'signin' ? 'Login' : 'Sign up'}
                            </h1>
                            <form>
                                {
                                    this.state.mode === 'signin' ? 
                                    <span></span> : 
                                    <div className="auth__main--content--form">
                                        <input type="text" className="auth__main--content--form--input" placeholder="John Doe" id="fullname" autoComplete="off"/>
                                        <label htmlFor="fullname" className="auth__main--content--form--label">Full name</label>
                                    </div>
                                }
                                <div className="auth__main--content--form">
                                    <input type="email" className="auth__main--content--form--input" placeholder="Enter email address" id="email" autoComplete="off"/>
                                    <label htmlFor="email" className="auth__main--content--form--label">Email address</label>
                                </div>
                                <div className="auth__main--content--form">
                                    <input type={this.state.showPassword ? 'text' : 'password'} className="auth__main--content--form--input" placeholder="Enter your password" id="password" autoComplete="off"/>
                                    <label htmlFor="password" className="auth__main--content--form--label">Password</label>
                                    <a href="#" className="auth__main--content--form--btn" onClick={this.showPassword}>{this.state.showPassword ? 'Hide' : 'Show'}</a>
                                </div>
                                <a href="#" className="auth__main--content--btn">{this.state.mode === 'signin' ? 'Login' : 'Sign up'}</a>
                            </form>
                            <p className="auth__main--content--footer">
                                {
                                    this.state.mode === 'signin' ? 
                                    <span></span> :
                                    <span className="auth__main--content--footer--tc">By signing up, you agree to our <a href="#" className="auth__main--content--footer--link">terms and conditions</a></span>
                                }
                                {
                                    this.state.mode === 'signin' ? 
                                    <span className="auth__main--content--footer--auth">Don't have an account? <a href="#" onClick={this.changeAuthMode} className="auth__main--content--footer--link">Sign up</a></span> :
                                    <span className="auth__main--content--footer--auth">Already have an account? <a href="#" onClick={this.changeAuthMode} className="auth__main--content--footer--link">Login</a></span>
                                }
                            </p>
                        </div>
                    </div>
                    <div className="auth__info">
                        <span className="auth__info-box auth__info-box--1"></span>
                        <span className="auth__info-box auth__info-box--2"></span>
                        <span className="auth__info-box auth__info-box--3"></span>
                        <div className="auth__info-box__content">
                            <div className="auth__info-box__content--main">
                                <p className="auth__info-box__content--comment">
                                    The folks at EazyRent are really amazing to work with.
                                    The best thing is their reasonable pricing and their smooth process of handling my accomadation needs.
                                </p>
                                <p className="auth__info-box__content--person">
                                    <span className="auth__info-box__content--name">gafar amoo</span>
                                    <span className="auth__info-box__content--role">Photographer {`&`} Video Editor</span>
                                </p>
                            </div>
                            <div className="auth__info-box__content--footer">
                                <p className="auth__info-box__content--partnered">Partnered with the best</p>
                                <div className="auth__info-box__content--logos">
                                    <div className="auth__info-box__content--logo-box">
                                        <img src="/img/lekki.png" className="auth__info-box__content--logo"/>
                                    </div>
                                    <div className="auth__info-box__content--logo-box">
                                        <img src="/img/cortts.png" className="auth__info-box__content--logo"/>
                                    </div>
                                    <div className="auth__info-box__content--logo-box">
                                        <img src="/img/crawford.png" className="auth__info-box__content--logo"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>
                    {`
                        .auth{
                            height: 100vh;
                            display: flex;
                        }

                        .auth > *{
                            height: inherit;
                        }

                        .auth__main{
                            width: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            position: relative;
                        }

                        .auth__main--logo-box{
                            position: absolute;
                            top: 3rem;
                            left: 3rem;
                        }

                        .auth__main--logo{
                            width: 8%;
                        }

                        .auth__main--content{
                            width: 60%;
                            /* background-color: orange; */
                        }

                        .auth__main--content--title{
                        color: #612f04;
                        font-size: 4rem;
                        margin-bottom: 4rem;
                        }

                        .auth__main--content--form{
                            margin-bottom: 2.5rem;
                            display: flex;
                            flex-direction: column-reverse;
                            position: relative;
                        }

                        .auth__main--content--form--btn{
                            color: #a65006;
                        }

                        .auth__main--content--form--btn:link, .auth__main--content--form--btn:active{
                            outline: none;
                            display: inline-block;
                            position: absolute;
                            right: 0;
                            bottom: 25%;
                            text-decoration: none;
                            font-size: 1.5rem;
                            font-weight: 500;
                        }

                        .auth__main--content--form--label{
                            font-size: 1.5rem;
                            color: #919191;
                            transition: all .2s ease;
                        }

                        .auth__main--content--form--input{
                            font-family: 'Quicksand', sans-serif;
                            font-size: 2rem;
                            padding: 1.5rem 0;
                            width: 100%;
                            border: none;
                            border-bottom: .2rem solid #dddddd;
                        }

                        .auth__main--content--form--input::-webkit-input-placeholder{
                            color: #dddddd;
                        }

                        .auth__main--content--form--input:focus + .auth__main--content--form--label{
                            color: #a65006;
                        }

                        .auth__main--content--form--input:focus{
                            outline: none;
                            border: none;
                            border-bottom: .2rem solid #a65006;
                        }

                        .auth__main--content--btn{
                            color: white;
                        }

                        .auth__main--content--btn:link, .auth__main--content--btn:active{
                            text-decoration: none;
                            display: flex;
                            justify-content: center;
                            padding: 1.25rem 0;
                            font-size: 2rem;
                            border-radius: 5rem;
                            border-top-right-radius: 0rem;
                            margin-bottom: 2rem;
                            background:linear-gradient(to right bottom, #f2994a 0%,#f2c94c 100% );
                        }

                        .auth__main--content--footer{
                            font-size: 1.3rem;
                            font-weight: 500;
                        }

                        .auth__main--content--footer--tc{
                            display: block;
                            margin-bottom: 1rem;
                        }

                        .auth__main--content--footer--link{
                            color: #a65006;
                        }

                        .auth__main--content--footer--link:link, .auth__main--content--footer--link:active{
                            text-decoration: none;
                            text-transform: capitalize;
                        }

                        .auth__info{
                            width: 50%;
                            background:linear-gradient(to right bottom, #f2994a 0%,#f2c94c 100% );
                            background-color: #612f04;
                            position: relative;
                            overflow: hidden;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                        .auth__info-box{
                            position: absolute;
                            border-radius: 10rem;
                            display: inline-block;
                            background:linear-gradient(90deg, #f2994a 0%,#f2c94c 100% );
                        }

                        .auth__info-box--1{
                            height: 45rem;
                            width: 45rem;
                            left: -30rem;
                            transform: rotate(35deg) translateY(-50rem);
                        }

                        .auth__info-box--2{
                            height: 35rem;
                            width: 35rem;
                            left: -15rem;
                            bottom: 0;
                            transform: rotate(35deg) translateY(10rem);
                        }

                        .auth__info-box--3{
                            height: 35rem;
                            width: 35rem;
                            right: -20rem;
                            bottom: 15rem;
                            transform: rotate(35deg);
                        }

                        .auth__info-box__content{
                            height: 80%;
                            width: 80%;
                            z-index: 2;
                            color:#612f04;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                        }

                        .auth__info-box__content--main{
                            height: 30%;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-around;
                        }

                        .auth__info-box__content--comment{
                            width: 80%;
                            text-align: justify;
                            font-size: 1.85rem;
                            font-weight: 500;
                        }

                        .auth__info-box__content--person{
                            text-align: justify;
                            font-size: 1.7rem;
                            font-weight: 500;
                            text-transform: uppercase;
                        }

                        .auth__info-box__content--role{
                            display: block;
                            font-size: 1.1rem;
                            color:#b05507;
                            text-transform: capitalize;
                            margin-top: .25rem;
                        }

                        .auth__info-box__content--footer{
                            height: 25%;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-around;
                        }

                        .auth__info-box__content--partnered{
                            font-size: 1.7rem;
                            font-weight: 500;
                        }

                        .auth__info-box__content--logos{
                            width: 100%;
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-between;
                            align-content: space-between;
                        }

                        .auth__info-box__content--logo-box{
                            height: 4.5rem;
                            width: 30%;
                            margin-bottom: 1.75rem;
                            display: flex;
                        }


                        .auth__info-box__content--logo{
                            width: 60%;
                        }
                    `}
                </style>
            </div>
        );
    }
}

export default Auth;