import React from 'react';

import { Link, BrowserRouter } from 'react-router-dom';

import './ImageView.css';

const ImageView = (props) => {
	console.log(props);
	const singleImage = props.images.filter((image) => {
		return image.id == props.match.params.image;
	});
	console.log(singleImage);
	return (
		<div>
			<img src={singleImage[0].largeImageURL} />;
		</div>
	);
};

// const ImageView = (props) => {
// 	console.log(props.location.state.image);
// 	const {
// 		largeImageURL: image,
// 		user: owner,
// 		tags,
// 		pageURL,
// 	} = props.location.state.image;
// 	return (
// 		<div className='container'>
// 			<div className='row'>
// 				<div className='col-sm-12'>
// 					<div className='imageView_container'>
// 						<img
// 							src={image}
// 							alt={tags}
// 							className='imageView_img img-responsive'
// 						/>
// 						<div className='imageView_copyright'>
// 							<p>&copy;pixabay</p>
// 						</div>
// 						<div className='imageView_text'>
// 							<h4>
// 								Credit: <span>{owner}</span>
// 							</h4>
// 							<h4>
// 								Download:{' '}
// 								<span>
// 									<a target='_blank' href={pageURL}>
// 										{pageURL.substring(0, 10)}...[VIEW FULL LINK]
// 									</a>
// 								</span>
// 							</h4>
// 							<BrowserRouter>
// 								<button className='active-recipe_button'>
// 									<Link to='/'>Home</Link>
// 								</button>
// 							</BrowserRouter>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

export default ImageView;
