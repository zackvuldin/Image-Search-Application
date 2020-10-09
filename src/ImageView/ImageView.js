import React from 'react';

import './ImageView.scss';

const ImageView = (props) => {
	const singleImage = props.images.filter((image) => {
		return image.id == props.match.params.image;
	});
	return (
		<div>
			<img src={singleImage[0].largeImageURL} />;
		</div>
	);
};

export default ImageView;
