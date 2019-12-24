const Toggler = ({toggle})=>{
    return (
        <div>
            <span className="toggler">
                <input type="radio" name="activity" id="active" value="userListings" className="toggler__input" defaultChecked onChange={(e)=>toggle(e.target.value)}/>
                <label htmlFor="active"  className="toggler__label">My Homes</label>
                <input type="radio" name="activity" id="inactive" value="otherListings" className="toggler__input" onChange={(e)=>{toggle(e.target.value)}}/>
                <label htmlFor="inactive" className="toggler__label">Other Homes</label>
            </span>
            <style jsx>
                {`
                    .toggler{
                        display: inline-block;
                        background-color: #f2c94c;
                        padding: 1.1rem 0;
                        border-radius: 1rem;
                        box-shadow: 0 0 .1rem .05rem #f2c94c;
                        overflow: hidden;
                    }
                    
                    .toggler__input{
                        display: none;
                    }
                    
                    .toggler__label{
                        cursor: pointer;
                        font-size: 1.25rem;
                        font-weight: 500;
                        padding: 1.1rem 3rem;
                        border-radius: 1rem;
                    }
                    
                    .toggler__input:checked + .toggler__label{
                        background-color: white;
                        color: #683507;
                        box-shadow: 0 0 .1rem .05rem #f2c94c;
                    
                    }
                    
                    .toggler__input:not(:checked) + .toggler__label{
                        background-color: #f2c94c;
                        color: white;
                    }
                `}
            </style>
        </div>
    );
}

export default Toggler;