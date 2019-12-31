import Router, { useRouter } from 'next/router';
import Dashboard from '../components/Dashboard/Dashboard';

const viewlisting = ({listings})=>{
    const router = useRouter();
    const listingID = router.query.id;
    let fetchedListing;

    for (const listing of listings) {    
        if(listing.id.toString() === listingID){
            fetchedListing = listing;
        }
    }

    const deleteListing = async(id)=>{
        console.log(`Deleting listing ${id}`);
        const res = await fetch(`http://localhost:3004/listings/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json()
        console.log('Listing deleted');
        Router.push('/listings');
    }

    const editListing = ()=>{
        Router.push(`/edit-listing/?id=${router.query.id}`); 
    }

    const isLiked = (id)=>{
        for (const listing of listings){
            if(listing.id === id){
                for (const like of listing.likes) {
                    if(like === "abgfigu143668"){
                        return true;
                    }else{
                        return false;
                    }
                }
            }
        }
    }
    

    const likeListing = async(id)=>{
        //GETTING LIKES ARRAY FOR PROPERTY AND ADDING NEW LIKE TO IT
        const res = await fetch(`http://localhost:3004/listings/${id}`);
        const data = await res.json();
        let likes = data.likes;
        likes.push("abgfigu143668");

        //POSTING NEW LIKES
        const postRes = await fetch(`http://localhost:3004/listings/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({likes : likes})
        });

        const postData = await postRes.json();
    }

    const unlikeListing = async(id)=>{
        //GETTING INDEX OF USER'S LIKE AND REMOVING IT
        const res = await fetch(`http://localhost:3004/listings/${id}`);
        const data = await res.json();
        let likes = data.likes;
        let likedHomeID;
        for (const like of likes) {
            if(like === "abgfigu143668"){
                likedHomeID = likes.indexOf(like);
            }
        }
        likes.splice(likedHomeID, 1);

        //RETURNING NEW LIKES ARRAY
        const postRes = await fetch(`http://localhost:3004/listings/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({likes : likes})
        });

        const postData = await postRes.json();
        console.log(postData.likes);
    }
    
    return <Dashboard route="view-listing" listing={fetchedListing} deleteListing={deleteListing} editListing={editListing} isLiked={isLiked} likeListing={likeListing} unlikeListing={unlikeListing}/>;
}

viewlisting.getInitialProps = async()=>{
    const res = await fetch('http://localhost:3004/listings');
    const data = await res.json();

    return {
        listings: data
    }
};

export default viewlisting;