const PageTitle = ({title})=>{
    return (
        <div>
            <h2 className="app__main--listing--title">{title}</h2>
            <style jsx>
                {`
                    .app__main--listing--title{
                        margin: 5rem 0;
                        font-size: 3.5rem;
                    }
                `}
            </style>
        </div>
    );
}

export default PageTitle;