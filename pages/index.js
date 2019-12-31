import fetch from 'isomorphic-unfetch';
import { useState } from 'react';
import Auth from '../components/Auth/Auth';
import Dashboard from '../components/Dashboard/Dashboard';

const App = ({listings})=>{
    const [user, authStatus] = useState(true);

    const logOut = ()=>{
        authStatus(false);
    }

    //GETTING NUMBER OF USER'S HOMES FOR OVERVIEW PAGE
    const userListings = [];
    const [testUser] = useState('abgfigu143668');

    for (const listing of listings) {
        if(listing.user === testUser){
            userListings.push(listing);
        }
    }

    //GETTING NUMBER OF USER'S LIKES FOR OVERVIEW PAGE
    const housesLiked = [];
    for (const listing of listings) {
        for (const likes of listing.likes) {
            if(likes === "abgfigu143668"){
                housesLiked.push(listing);
            }
        }
    }

    return (
        <div>
            {(user) ? <Dashboard pageTitle="Dashboard - EazyRent" route="main" numberOfLikes={housesLiked.length} numberOfHomes={userListings.length} logout={logOut}/> : <Auth/>}
        </div>
    );
}

App.getInitialProps = async()=>{
    const res = await fetch('http://localhost:3004/listings');
    const data = await res.json();

    return {
        listings: data
    }
}

export default App;