const Map = ()=>{
    return (
        <div>
            <div className="map">
                Map goes here
            </div>
            <style jsx>
                {`
                    .map{
                        // flex: 0 0 45%;
                        width: 40rem;
                        background-color: coral;
                        height: 22.5rem;
                        border-radius: .5rem;
                        /* TEST ONLY */
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: white;
                        font-size: 3rem;
                    }
                `}
            </style>
        </div>
    );
}

export default Map;