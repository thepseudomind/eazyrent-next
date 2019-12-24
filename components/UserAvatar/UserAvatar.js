const UserAvatar = ()=>{
    return (
        <div className="user-avatar">
            <img src="/img/myAvatar.png" alt="user" className="user-avatar__img"/>
            <button className="user-avatar__edit" onClick={()=>{alert('I want to change the profile pic')}}></button>
            <style jsx>
                {`
                    .user-avatar{
                        flex: 0 0 45%;
                        height: 15rem;
                        width: 15rem;
                        border-radius: 50%;
                        border: none;
                        position: relative;
                    }
                    
                    .user-avatar__img{
                        width: 100%;
                        border-radius: inherit;
                    }
                    .user-avatar__edit{
                        position: absolute;
                        right: -.5rem;
                        bottom: 2rem;
                        height: 3.5rem;
                        width: 3.5rem;
                        border-radius: 50%;
                        border: none;
                        background: linear-gradient(to right bottom, honeydew, indianred);
                        background: linear-gradient(to right bottom, coral, indigo);
                        cursor: pointer;
                    }
                    
                    .user-avatar__edit:focus{
                        outline: none;
                    }
                `}
            </style>
        </div>
    );
}

export default UserAvatar;
