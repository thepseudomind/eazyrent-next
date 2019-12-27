import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard/Dashboard';

const listings = ({listings})=>{
    let userListings = [], otherListings = [];
    const [toggleStatus, toggle] = useState('userListings');
    const [testUser] = useState('abgfigu143668');

    for (const listing of listings) {
        if(listing.user === testUser){
            userListings.push(listing);
        }else{
            otherListings.push(listing);
        };
    }
    
    return <Dashboard pageTitle="Listings - EazyRent" route="listings" toggle={toggle} toggleStatus={toggleStatus} listings={(toggleStatus === 'userListings') ? userListings : otherListings} user={testUser}/>;
}

listings.getInitialProps = async()=>{
    const res = await fetch('http://localhost:3004/listings');
    const data = await res.json();

    return {
        listings: data
    }
}

export default listings;