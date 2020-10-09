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

export default ImageView;
