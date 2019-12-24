import Toggler from '../Toggler/Toggler';

const ListingTitle = ({toggle})=>{
    return (
        <div>
            <div className="app__main--listing">
                <h2 className="app__main--listing--title">Listings</h2>
                <Toggler toggle={toggle}/>
            </div>
            <style jsx>
                {`
                    .app__main--listing{
                        margin-top: 5rem;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .app__main--listing--title{
                        font-size: 3.5rem;
                    }
                `}
            </style>
        </div>
    );
}

export default ListingTitle;