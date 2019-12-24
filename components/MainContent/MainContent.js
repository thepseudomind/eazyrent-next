import React from 'react';

const MainContent = (props)=>{
    return (
        <div className="app__main">
            <div className="app__main--content">
                {props.children}
            </div>
            <style jsx>
                {`  
                    .app__main{
                        background-color: #fefcf5;
                        overflow-y: scroll;
                        flex: 0 0 80%;
                        padding: 5rem 0;
                        /* display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-around; */
                    }
                    
                    .app__main--content{
                        width: 80%;
                        margin: 0 auto;
                    }
                    
                    // .app__main--content:not(:last-child){
                    //     background-color: pink;
                    //     margin-bottom: 5rem;
                    // }
                    
                    .app__main--listing{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        color: #683507;
                        /* background-color: blueviolet; */
                    }

                    .app__main--details{
                        background-color: olive
                        display: flex;
                        justify-content: space-between;
                    }
                    
                    .app__main--details:not(:last-child){
                        margin-bottom: 5rem;
                    }
                    
                    /* .app__main--details > *{ 
                        background-color: green;
                    } */
                `}
            </style>
        </div>
    );
}

export default MainContent; 