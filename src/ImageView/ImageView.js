import React from 'react'

// import { Link } from 'react-router-dom'

import './ImageView.css'

const ImageView = (props) => {
    const { largeImageURL: image, user: owner, tags, pageURL } = props.location.state.image
    return (
			<div className='container'>
				<div className='row'>
					<div className='col-sm-12'>
						<div className='imageView_container'>
							<img
								src={image}
								alt={tags}
								className='imageView_img img_-responsive'
							/>
							<div className='imageView_copyright'>
								<p>&copy;pixabay</p>
							</div>
						</div>
						<div className='imageView_text'>
                            <h4>Credit: <span>{owner}</span></h4>
                        </div>
					</div>
				</div>
			</div>
		);
}

export default Image