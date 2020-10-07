import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import './ImageList.css';
import ImageView from '../ImageView/ImageView.js'

const ImageList = (props) => {
	console.log(props);
	return (
		<div className='container'>
			<div className='row'>
				{ props.images.map((image) => {
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
								<BrowserRouter>
									<Link
										to={{
											path: `/image/${image.id}`,
											state: { props },
										}}>
										<button>View</button>
									</Link>
								</BrowserRouter>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ImageList;