import React from 'react';
import { Link } from 'react-router-dom';

import './ImageList.css';

const ImageList = (props) => {
	console.log(props.images);
	return (
		<div className='container'>
			<div className='row'>
				{props.images &&
					props.images.map((image) => {
						return (
							<div
								key={image.id}
								className='col-md-4'
								style={{ marginBottom: '2rem' }}>
								<div className='imageList_container'>
									<img
										className='imageList_image'
										src={image.largeImageURL}
										alt={image.tags}
									/>
								</div>
								<div className='image_details'>
									<Link
										to={{
											pathname: `/image/${image.id}`,
										}}>
										<button onClick={props.handleClick}>View</button>
									</Link>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default ImageList;
