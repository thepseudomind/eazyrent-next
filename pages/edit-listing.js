import fetch from 'isomorphic-unfetch';
import Router, { useRouter } from 'next/router';
import Dashboard from '../components/Dashboard/Dashboard';

const editListing = ({listing})=>{
    const router = useRouter();
    const listingID = router.query.id;

    const overwriteListing = async(id)=>{
        const dataToPost = {
            name : document.getElementById('title').value,
            address: document.getElementById('address').value,
            price : document.getElementById('price').value,
            type : document.getElementById('payment').value,
            beds : document.getElementById('beds').value,
            baths : document.getElementById('baths').value,
            description : document.getElementById('description').value,
        }

        const res = await fetch(`http://localhost:3004/listings/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToPost)
        });
        const data = await res.json();
        console.log('Success', JSON.stringify(data));

        Router.push('/listings');
    }

    return <Dashboard route="edit-listing" listingID={listingID} listingToEdit={listing} overwriteListing={overwriteListing}/>
}

editListing.getInitialProps = async(router)=>{
    const res = await fetch(`http://localhost:3004/listings/${router.query.id}`);
    const data = await res.json();

    return {
        listing: data
    }
}

export default editListing;