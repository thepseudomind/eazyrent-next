import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard/Dashboard';

const Listings = ({users})=>{
    let userListings = [], otherListings = [];
    const [toggleStatus, toggle] = useState('userListings');
    const [testUser] = useState('abgfigu143668');

    for (const user in users) {
        if(user === testUser){
            userListings = users[testUser].listings;
        }else{
            otherListings = users[user].listings;
        };
    }
    
    return <Dashboard pageTitle="Listings - EazyRent" route="listings" toggle={toggle} toggleStatus={toggleStatus} listings={(toggleStatus === 'userListings') ? userListings : otherListings} user={testUser}/>;
}

Listings.getInitialProps = async()=>{
    const res = await fetch('http://localhost:3004/users');
    const data = await res.json();

    return {
        users: data
    }
}

export default Listings;