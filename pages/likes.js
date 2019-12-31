import fetch from 'isomorphic-unfetch';
import Dashboard from "../components/Dashboard/Dashboard";

const likes = ({listings})=>{
    let housesLiked = [];
    for (const listing of listings) {
        for (const likes of listing.likes) {
            if(likes === "abgfigu143668"){
                housesLiked.push(listing);
            }
        }
    }
    
    return (
        <div>
            <Dashboard pageTitle="Likes - EazyRent" route="likes" housesLiked={housesLiked}/>
        </div>
    );
}

likes.getInitialProps = async()=>{
    const res = await fetch("http://localhost:3004/listings");
    const data = await res.json();

    return{
        listings: data
    }
}

export default likes;