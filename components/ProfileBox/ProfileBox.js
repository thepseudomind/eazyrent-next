import UserAvatar from '../UserAvatar/UserAvatar';

const ProfileBox = ()=>{
    return (
        <div>
            <div className="profile-box">
                <UserAvatar/>
                <div className="profile-box__user">
                    <h1 className="profile-box__user--name">Batholomew Arinzeabalaga</h1>
                    <p className="profile-box__user--location">Lagos, Nigeria</p>
                </div>
            </div>
            <style jsx>
                {`
                    .profile-box{
                        display: flex;
                        width: 40%;
                        align-items: center;
                        justify-content: space-around;
                        margin-bottom: 2.5rem;
                    }
                    
                    .profile-box__user{
                        flex: 0 0 40%;
                        display: flex;
                        height: 60%;
                        flex-direction: column;
                        justify-content: space-around;
                    }
                    
                    .profile-box__user--name{
                        font-size: 2rem;
                    }
                    
                    .profile-box__user--location{
                        font-size: 1.3rem;
                        /* font-style: italic; */
                        font-weight: 400;
                        color: grey;
                    }
                `}
            </style>
        </div>
    );
}

export default ProfileBox;