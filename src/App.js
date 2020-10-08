import React from 'react';
import './App.css';
import ImageSearch from './ImageSearch/ImageSearch';
import ImageList from './ImageList/ImageList';
import ImageView from './ImageView/ImageView';
import { Link, Route, Switch } from 'react-router-dom';

const API_KEY = '18550778-11774fb291f3a731ce9063d4e';

class App extends React.Component {
	state = {
		images: [],
		error: null,
		currentImageData: [],
		// currentImageData is data that imageList will provide
	};
	// create a handleClick
	// this function will be passed down to imageList
	// this function will set state to that imageData
	// research: setState({}) this is class components in react

	handleClick(props) {
		props.setState(props, []);
	}

	handleGetRequest = async (event) => {
		event.preventDefault();

		const searchTerm = event.target.elements.searchValue.value;
		const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`;

		const request = await fetch(url);

		const response = await request.json();

		if (!searchTerm) {
			this.setState({ error: 'Please provide a value.' });
		} else {
			this.setState({ images: response.hits, error: null });
			console.log(this.state.images);
		}
	};

	render() {
		return (
			<div>
				<ImageSearch handleGetRequest={this.handleGetRequest} />
				<Switch>
					<Route
						path='/image/:image'
						render={(routerProps) => (
							<ImageView {...routerProps} images={this.state.images} />
						)}
					/>

					<Route
						path='/image/'
						render={(routerProps) => (
							<ImageList {...routerProps} images={this.state.images} />
						)}
					/>
					<Route path='/'>
						{this.state.error !== null ? (
							<div style={{ color: '#fff', textAlign: 'center' }}>
								{this.state.error}
							</div>
						) : (
							<ImageList images={this.state.images} />
						)}
					</Route>
				</Switch>

				{/* { this.state.images.length > 0 && this.state.images.map((image) => {
					return <p key={image.id}>{ image.tags }</p>
				})} */}
			</div>
		);
	}
}

export default App;
