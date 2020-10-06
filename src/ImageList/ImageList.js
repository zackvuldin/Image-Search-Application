import React from 'react';
import { Link } from 'react-router-dom';

import './ImageList.css';

const ImageList = ({ images }) => {
	console.log(images)
	return (
		<div className='container'>
			<div className='row'>
                { images.map((image) => {
                return (
                    <div key={image.id} 
                    className="cold-md-4" 
                    style={{ marginBottom:'2rem'}}>
                        <div className='imageList_container'>
                            <img className='imageList_image' 
                            src={image.largeImageURL} 
                            alt={image.tags} />
                        </div>
                        <div className="image_details">
                                <button>
                                    View
                                </button>
                        </div>
                    </div>
                )
            })}</div>
		</div>
	);
};

export default ImageList;

/* <p key={ id }>{ tags }</p>; */

// {
// 	props.images.map(({ id, largeImageURL, tags }) => {
// 		return (
// 			<div key={id}>
// 				<img src={largeImageURL} alt={tags} />
// 				<button>Search</button>
// 			</div>
// 		);
// 	});
// }



/* <Link
to={{
pathname: `/image/${image.id}`,
state: { image },
}}></Link>; */