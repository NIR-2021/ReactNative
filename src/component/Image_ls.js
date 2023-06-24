import react from 'react';

const Image_ls = (props) =>{

    

    const images = props.images.map((image) =>{
        return(
            <a target='_blank' href={image.src.original} ><img src={image.src.small} /></a>
        );
    })
    return(
        <div>
           {images}
        </div>
    )
}

export default Image_ls;