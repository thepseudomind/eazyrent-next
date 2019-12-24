import { useRouter } from 'next/router';
import Dashboard from '../components/Dashboard/Dashboard';

const viewlisting = ({users})=>{
    const router = useRouter();
    let fetchedListing = [];

    for (const user in users){
        for(const listing of users[user].listings){
            if(listing.id === router.query.id){
                fetchedListing = listing;
            }
        }
    }
    
    return <Dashboard route="view-listing" listing={fetchedListing}/>;
}

viewlisting.getInitialProps = async()=>{
    const res = await fetch('http://localhost:3004/users');
    const data = await res.json();

    return {
        users: data
    }
};

export default viewlisting;