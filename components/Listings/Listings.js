import ListingCard from '../ListingCard/ListingCard';
import FloatingButton from '../FloatingButton/FloatingButton';

const Listings = ({listings, toggleStatus}) =>{
    return (
        <div>
            <div className="listings">
                {
                    (listings.length === 0) ? <h1 className="listings__none">No houses found<span className="listings__none--subtitle">Add new listing with the floating button...</span></h1> : listings.map((v, i)=> <ListingCard key={listings[i].id} id={listings[i].id} name={listings[i].name} address={listings[i].address} price={listings[i].price} type={listings[i].type} image={listings[i].images[0]} beds={listings[i].beds} baths={listings[i].baths}/>)
                }
            </div>
            {toggleStatus === 'userListings' ? <FloatingButton route="/add-listing"/> : <span></span>}
            <style jsx>
                {`
                    .listings{
                        margin-top: 5rem;
                        text-align: center;
                    }

                    .listings > *{
                        margin-bottom: 2rem;
                    }

                    .listings__none{
                        transform: translateY(17.5vh);
                        font-size: 5rem;
                        font-weight: 500;
                    }

                    .listings__none--subtitle{
                        display: block;
                        font-size: 1.5rem;
                        font-weight: 500;
                    }
                `}
            </style>
        </div>
    );
}

export default Listings;