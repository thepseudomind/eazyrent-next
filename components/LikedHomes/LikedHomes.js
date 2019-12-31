import ListingCard from "../ListingCard/ListingCard"

const LikedHomes = ({likedHomes})=>{
    return (
        <div>
           {likedHomes.length === 0 ? <h1 className="likes__none">No homes liked...</h1> : likedHomes.map((v, i)=> <ListingCard key={likedHomes[i].id} id={likedHomes[i].id} name={likedHomes[i].name} address={likedHomes[i].address} price={likedHomes[i].price} type={likedHomes[i].type} image={likedHomes[i].images[0]} beds={likedHomes[i].beds} baths={likedHomes[i].baths}/>)}
           <style jsx>
               {`
                    .likes__none{
                        transform: translateY(17.5vh);
                        font-size: 5rem;
                        font-weight: 500;
                        text-align: center;
                    }
               `}
           </style>
        </div>
    );
}

export default LikedHomes;