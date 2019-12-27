import { useRouter } from 'next/router';
import Dashboard from '../components/Dashboard/Dashboard';

const viewlisting = ({listings})=>{
    const router = useRouter();
    let fetchedListing;

    for (const listing of listings) {
        if(listing.id === router.query.id){
            fetchedListing = listing;
        }
    }
    
    return <Dashboard route="view-listing" listing={fetchedListing}/>;
}

viewlisting.getInitialProps = async()=>{
    const res = await fetch('http://localhost:3004/listings');
    const data = await res.json();

    return {
        listings: data
    }
};

export default viewlisting;