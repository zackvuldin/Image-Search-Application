import React from 'react';
import './App.css';
import ImageSearch from './ImageSearch/ImageSearch'
import ImageList from './ImageList/ImageList'

// my API key
const API_KEY = '18550778-11774fb291f3a731ce9063d4e';

// backticks for template literal
// replace api key with the const
// const url = `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo`;


// function App() {
//   return (
//     <div className="App">
//       <h1> hello world </h1>
//     </div>
//   );
// }

// stackoverflow with extends react.component
class App extends React.Component {
	state = {
		images: []
	};

	// not using the traditional function b/c i dont want the keyword to bind itself to its parent method instead of its parent class
	// i want this keyword to always refer back to the app component. arrow function lets it free
	// async = make the function return a promise and also resolve the promise automatically if its successful!
	handleGetRequest = async (event) => {
	event.preventDefault()
	// finds name attribute and attach to it's property, searchTerm
		const searchTerm = event.target.elements.searchValue.value
		const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`;
		// console.log to make sure its working.
		// console.log('working!!!');

		// await = only turns in sync function. only works when the promise is resolved. simplifies promises.
		// fetch method = responsible for making the request
		const request = await fetch(url);

		const response = await request.json();

		this.setState({ images: response.hits });

		// console.log(response.hits)
		console.log(searchTerm);
		console.log(this.state.images);
	};
	// this method only runs first and its when the component first runs on the web browser.
	// "this" is referring to the app component and then in the app component we have a method called "handleGetRequest"
	// componentDidMount() {
	// 	this.handleGetRequest();
	// }
	render() {
		return (
			<div>
				<ImageSearch handleGetRequest={this.handleGetRequest} />
				<ImageList images={this.state.images}/>
				{/* { this.state.images.length > 0 && this.state.images.map((image) => {
					return <p key={image.id}>{ image.tags }</p>
				})} */}
			</div>
		);
	}
}


export default App;
