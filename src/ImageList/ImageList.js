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
										// props.handleClick this is coming from app.js
										// onClick pass image object data back up to app.js
										to={{
											pathname: `/image/${image.id}`,
											// state: { props },
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

// <Link
// 	to={{
// 		pathname: `/image/${image.id}`,
// 		state: { props },
// 	}}>
// 	<button>View</button>
// </Link>;
