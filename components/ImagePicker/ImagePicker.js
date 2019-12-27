import { useState} from 'react';

const ImagePicker = ({getImages})=>{
    const[images, chooseImages] = useState([]);

    const recieveImages = (files)=>{
        chooseImages(Array.from(files));
    }

    const renderImage = (image, i)=>{
        const reader = new FileReader();
        reader.addEventListener('load', ()=>{
            getImages(reader.result);
            document.getElementById(`preview-${i}`).style.backgroundImage = `url(${reader.result})`;
        });
        reader.readAsDataURL(image); 
    }

    const deleteImage = (e)=>{
        const id = parseInt(e.target.parentNode.id.slice(-1));
        images.splice(id, 1);
        chooseImages([...images]);
    }

    return (
        <div>
            <div className="image-picker" onClick={
                    ()=>{
                        const imagePicker = document.getElementById('images');
                        imagePicker.click();
                    }
                }>
                <input type="file" id="images" className="image-picker__picker" accept="image/*" multiple onChange={
                    (e) => {
                        recieveImages(e.target.files);
                    }
                }/>
                <div className="image-picker__content">
                    <a href="#" className="image-picker__btn">
                        <span className="image-picker__btn--icon">+</span>
                    </a>
                    <p className="image-picker__label">Add images</p>
                </div>
            </div>
            <div className="image-picker__preview">
                {
                    images.map((v, i, a) => {
                        renderImage(a[i], i);
                        return (
                            <div key={`preview-${i}`} id={`preview-${i}`} className="image-picker__img">
                                <span className="image-picker__del" onClick={deleteImage}>
                                    x
                                </span>
                            </div>
                        );
                    })
                }
            </div>
            <style jsx>
                {`
                    .image-picker{
                        margin-top: 8.5rem; //Just for this project
                        height: 15rem;
                        width: 30rem;
                        border-radius: .5rem;
                        border: .2rem dashed #dddddd;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                    }
                    
                    .image-picker__picker{
                        display: none;
                    }
                    
                    .image-picker__content{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    
                    .image-picker__btn{
                        color: #dddddd;
                    }
                    
                    .image-picker__btn:link, .image-picker__btn:active{
                        display: inline-block;
                        text-decoration: none;
                        height: 5rem;
                        width: 5rem;
                        border: .2rem dashed #dddddd;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        /* align-items: center; */
                    }
                    
                    .image-picker__btn--icon{
                        font-size: 3.5rem;
                    }
                    
                    .image-picker__label{
                        margin-top: .5rem;
                        font-size: 1.5rem;
                        color: #dddddd;
                    }
                    
                    .image-picker__preview{
                        margin-top: 1rem;
                        max-width: 31rem;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: flex-start;
                    }
                    
                    .image-picker__img{
                        flex: 0 0 30%;
                        width: 6.5rem;
                        height: 6.5rem;
                        margin-right: 3%;
                        margin-bottom: .75rem;
                        border-radius: .5rem;
                        background-repeat: no-repeat;
                        background-size: contain;
                        background-position: center;
                        box-shadow: 0 .3rem 1rem rgba(0, 0, 0, 0.2);
                        cursor: pointer;
                        position: relative;
                    }
                    
                    .image-picker__img:hover .image-picker__del{
                        opacity: 1;
                    }
                    
                    .image-picker__del{
                        position: absolute;
                        top: -.5rem;
                        right: -.5rem;
                        height: 1.5rem;
                        width: 1.5rem;
                        text-align: center;
                        border-radius: 50%;
                        color: white;
                        background-color: red;
                        font-size: 1rem;
                        font-weight: 500;
                        opacity: 0;
                        transition: all .2s ease;
                    }
                `}
            </style>
        </div>
    );
}

export default ImagePicker;