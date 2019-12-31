import Router from 'next/router';
import Dashboard from '../components/Dashboard/Dashboard';

const addlisting = ()=>{
    //user: "j64ew0u143668"
    let imagesToBeUploaded = [];
    const submitForm = async()=>{
        const dataToPost = {
            user: "abgfigu143668",
            name : document.getElementById('title').value,
            address: document.getElementById('address').value,
            price : document.getElementById('price').value,
            type : document.getElementById('payment').value,
            city : document.getElementById('city').value,
            state : document.getElementById('state').value,
            beds : document.getElementById('beds').value,
            baths : document.getElementById('baths').value,
            description : document.getElementById('description').value,
            images : imagesToBeUploaded,
            likes : []
        }

        const res = await fetch('http://localhost:3004/listings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToPost)
        });
        const data = await res.json();
        console.log('Success', JSON.stringify(data));

        Router.push('/listings');
    }

    const getImages = (images)=>{
        imagesToBeUploaded = [];
        for (const image of images) {
          convertImages(image);  
        }
    }

    const convertImages = (image)=>{
        const reader = new FileReader();
        reader.addEventListener('load', ()=>{
            imagesToBeUploaded.push(reader.result);
        });
        reader.readAsDataURL(image);
    }

    return <Dashboard route="add-listing" addListing={submitForm} getImages={getImages}/>;
}

export default addlisting;