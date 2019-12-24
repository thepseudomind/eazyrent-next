import ListingCard from '../ListingCard/ListingCard';
import FloatingButton from '../FloatingButton/FloatingButton';

const Listings = ({listings, toggleStatus}) =>{
    return (
        <div>
            <div className="listings">
                {
                    listings.map((v, i)=> <ListingCard key={i} name={listings[i].name} address={listings[i].address} price={listings[i].price} type={listings[i].type} image={listings[i].imageUrl}/>)
                }
            </div>
            {toggleStatus === 'userListings' ? <FloatingButton/> : <span></span>}
            <style jsx>
                {`
                    .listings{
                        margin-top: 5rem;
                    }
                    
                    .listings > *{
                        margin-bottom: 2rem;
                    }
                `}
            </style>
        </div>
    );
}

export default Listings;