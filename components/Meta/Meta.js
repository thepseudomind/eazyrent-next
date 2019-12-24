import Head from 'next/head';

const Meta = ({pageTitle})=>{
    return (
        <Head>
            <meta charSet="UTF-8" />>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <link type="text/css" href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap" rel="stylesheet"></link>
            <title>{pageTitle}</title>
            <style jsx global>
            {`
                    // @import url('https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap');
                    
                    *{
                        padding: 0;
                        margin: 0;
                        border-box: box-sizing;
                    }

                    *::before, *::after{
                        padding: 0;
                        margin: 0;
                        border-box: box-sizing;
                    }

                    html{
                        font-size: 62.5%;
                    }

                    body{
                        font-family: 'Quicksand', sans-serif;
                    }
                `}
            </style>
        </Head>
    )
}

export default Meta;