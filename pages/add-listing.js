import Dashboard from '../components/Dashboard/Dashboard';

const addlisting = ()=>{
    const imagesToBeUploaded = [];
    const submitForm = async()=>{
        // const images = Array.from(document.getElementById('images').files);
        // const imagesToBeUploaded = [];
        // const reader = new FileReader();

        // images.forEach(
        //     (v, i)=>{
        //         console.log(images[i]);
        //         window.addEventListener('load', ()=>{
        //             imagesToBeUploaded.push(reader.result);
        //         });
        //         reader.readAsBinaryString(images[i]);
        //         console.log(imagesToBeUploaded);
        //     }
        // );

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
            images : imagesToBeUploaded
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
    }

    const getImages = (image)=>{
        imagesToBeUploaded.push(image);
        console.log(imagesToBeUploaded);
    }

    return <Dashboard route="add-listing" addListing={submitForm} getImages={getImages}/>;
}

export default addlisting;