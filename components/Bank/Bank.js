const Bank = ({banks, editBank, deleteBank, changeForm})=>{
    return (
        <div>
            <div className="banks">
                {
                    (banks.length >= 1) ? banks.map((v, i) => {
                        return (
                            <div id={i} key={i} className="bank" onClick={
                                (e)=>{
                                    if(e.target.id !== ''){
                                        changeForm('edit');
                                        editBank(e.target.id);
                                    }
                                }
                            }>
                                <span className="bank__delete" onClick={
                                    (e)=>{
                                        if(e.target.className.slice(14, 32) === "bank__delete"){
                                            deleteBank(e.target.parentNode.id);
                                        }else if(e.target.className.slice(14, 32) === "bank__delete--img"){
                                            deleteBank(e.target.parentNode.parentNode.id);
                                        }
                                    }
                                }>
                                    <img src='img/bin.png' alt="delete bank" className="bank__delete--img"/>
                                </span>
                                <div className="bank__content">
                                    <p className="bank__content--name">{banks[i].name}</p>
                                    <p className="bank__content--account">{banks[i].account}</p>
                                    <span className="bank__content--status"><span className="bank__content--indicator"></span>{banks[i].status}</span>
                                </div>
                            </div>
                        )
                    }) : <div className="banks empty"><p className="bank__empty"><img src="/img/crying.png" className="bank__img"/>No banks are currently added to your account <img src="/img/crying.png" className="bank__img"/></p></div>
                }
            </div>
            <style jsx>
                {`
                    .banks{
                        /* background-color: blue; */
                        height: 20rem;
                        width: 100%;
                        display: flex;
                        justify-content: flex-start;
                        flex-wrap: wrap;
                        margin-bottom: 3rem;
                    }

                    .banks.empty{
                        // background-color: blue;
                        height: 20rem;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        // align-items: center;
                    }
                    
                    .banks > *{
                        margin: 1rem;
                    }
                    
                    .bank{
                        background:linear-gradient(90deg, #ff4e50 0%,#f9d423 100% );
                        box-shadow: 0 .2rem 2rem rgba(0, 0, 0, 0.205);
                        height: 15rem;
                        width: 30%;
                        border-radius: 1rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: white;
                        text-transform: uppercase;
                        cursor: pointer;
                        position: relative;
                    }

                    .bank__empty{
                        font-size: 2rem;
                        fontweight: 500;
                        display: flex;
                        justify-content: center;
                        align-items: flex-start;
                    }

                    .bank__img{
                        width: 5%;
                        margin: 0 1.5rem;
                        opacity: .8;
                        transform: translateY(-.75rem);
                    }
                    
                    .bank.inactive{
                        background:linear-gradient(90deg, #1e130c 0%,#9a8478 100% );
                        box-shadow: 0 .2rem 2rem rgba(0, 0, 0, 0.205);
                        height: 15rem;
                        width: 30%;
                        border-radius: 1rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: white;
                        text-transform: uppercase;
                    }
                    
                    .bank:hover .bank__delete{
                        opacity: 1;
                    }
                    
                    .bank__delete{
                        position: absolute;
                        top: .75rem;
                        right: .75rem;
                        display: inline-block;
                        height: 2.5rem;
                        width: 2.5rem;
                        border-radius: 50%;
                        background-color: rgba(0, 0, 0, 0.6);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        opacity: 0;
                        transition: all .5s ease;
                    }
                    
                    .bank__delete--img{
                        width: 1.5rem;
                    }
                    
                    .bank__content{
                        width: 80%;
                        /* background-color: gold; */
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    
                    .bank__content--name{
                        font-size: 1.5rem;
                        font-weight: 300;
                        letter-spacing: .4rem;
                    }
                    
                    .bank__content--account{
                        font-size: 3rem;
                        font-weight: 600;
                        letter-spacing: .35rem;
                    }
                    
                    .bank__content--status{
                        margin-top: .5rem;
                        padding: .5rem 1.5rem;
                        background-color: #f9d423;
                        /* background-color: red; */
                        border-radius: 5rem;
                        font-weight: 600;
                        /* display: flex;
                        justify-content: space-around;
                        align-items: center; */
                    }
                    
                    .bank__content--indicator{
                        margin-right: .5rem;
                        display: inline-block;
                        height: .5rem;
                        width: .5rem;
                        border-radius: 50%;
                        background-color: #3FBC43;
                    }
                `}
            </style>
        </div>
    );
}

export default Bank;