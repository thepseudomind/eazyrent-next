const SearchBar = ()=>{
    return (
        <div>
            <form className="app__main--searchbar" autoComplete="off">
                <input type="search" className="app__main--searchbar--input" placeholder="Search for your dream home" id="search"/>
                <img src='/img/searchicon.png' alt="searchIcon" className="app__main--searchbar--icon"/>
            </form>
            <style jsx>
                {`
                    .app__main--searchbar{
                        width: 100%;
                        position: relative;
                    }
                    
                    .app__main--searchbar--input{
                        width: inherit;
                        padding: 2.5rem 2rem;
                        padding-left: 6rem;
                        font-size: 1.5rem;
                        font-family: Quicksand, 'sans-serif';
                        border: 1px solid #F6F8FC;
                        border-radius: 1rem;
                        box-shadow: 0 .1rem .05rem .005rem rgba(black, .1);
                    }
                    
                    .app__main--searchbar--input::-webkit-input-placeholder{
                        color: #CAC8CF;
                    }
                    
                    .app__main--searchbar--input:focus{
                        outline: none;
                    }
                    
                    .app__main--searchbar--icon{
                        width: 3%;
                        position: absolute;
                        left: 1.5rem;
                        top: 50%;
                        transform: translateY(-50%);
                        opacity: .5;
                    }
                `}
            </style>
        </div>
    );
}

export default SearchBar;