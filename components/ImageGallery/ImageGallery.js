import { useState } from 'react';

const ImageGallery = ({images})=>{
    const [activeImage, changeImage] = useState(images[0]);
    return (
        <div>
            <div className="image-gallery">
                <img alt="mainImage" className="image-gallery__active" src={activeImage}/>
                <div className="image-gallery__inactive">
                    {images.map(
                        (v, i) => {
                            if(images[i] === activeImage){
                                return <img key={images[i]} alt="activeImage" className="image-gallery__inactive--images image-gallery__inactive--images--active" src={images[i]} onClick={()=> changeImage(images[i])}/>
                            }else{
                                return <img key={images[i]} alt="inactiveImage" className="image-gallery__inactive--images" src={images[i]} onClick={()=> changeImage(images[i])}/>
                            }
                        }
                    )}
                </div>
            </div>
            <style jsx>
                {`
                    .image-gallery{
                        width: 35rem;
                        min-height: 30rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                    
                    .image-gallery__active{
                        height: 22rem;
                        width: 100%;
                        border-radius: 1rem;
                        margin-bottom: 2rem;
                        cursor: pointer;
                    }
                    
                    .image-gallery__inactive{
                        width: 100%;
                        /* min-height: 12rem; */
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: flex-start;
                        align-content: space-around;
                    }
                    
                    .image-gallery__inactive--images{
                        width: 7.5rem;
                        height: 5.5rem;
                        margin-right: 1.25rem;
                        border-radius: .5rem;
                        margin-bottom: 1rem;
                        cursor: pointer;
                    }
                    
                    .image-gallery__inactive--images--active{
                        outline: .2rem solid #f2994a;
                        outline-offset: .2rem;
                    }
                    
                    .image-gallery__inactive--images:hover{
                        outline: .2rem solid #f2994a;
                        outline-offset: .2rem;
                    }
                    
                    /* .image-gallery__inactive--images{
                        height: 7.5rem;
                    } */
                `}
            </style>
        </div>
    );
}
export default ImageGallery;