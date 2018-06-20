import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {

	constructor(){
		super();
		this.state = {
			topic: '',
			startYear: '',
			endYear: '',
			articles: []
		}
	}

	handleChange = (event) => {
		const state = this.state;
		state[event.target.name] = event.target.value;
		this.setState(state, () => console.log(this.state));
		console.log(event.target.value);
	}

	handleSubmit = (event) => {
		// send data to backend, which will process the NYT API
		console.log("handleSubmit is working")
		event.preventDefault();

		const { topic, startYear, endYear } = this.state;

		// pass variables to backend to complete the API request
		// change hard-coded localhost when deploying
		axios.get('http://localhost:3000/api/articles', {
			params: {
				topic, startYear, endYear
			}
		})
		.then(function(data){
			console.log(data);
			this.setState({articles: data.data});
		})
		.catch(function(error){
			console.log(error);
		})
		console.log(event);
	}

	render() {
		return(
			<div className="container">
				<div className="card">
				  <div className="card-header text-center">
				    <h3>Search</h3>
				  </div>
					  <div className="card-body">
					    <h4 className="card-text text-center">Topic</h4>
					    <input className="form-control form-control-lg" onChange={this.handleChange} name="topic" type="text" placeholder="Enter your search topic" />

					    <h4 className="card-text text-center">Start Year</h4>
					    <input className="form-control form-control-lg" onChange={this.handleChange} name="startYear" type="text" placeholder="Enter the start year for your query" />

					    <h4 className="card-text text-center">End Year</h4>
					    <input className="form-control form-control-lg" onChange={this.handleChange} name="endYear" type="text" placeholder="Enter the end year for your query" />

					    <a onClick={this.handleSubmit} className="btn search-btn btn-primary float-right">Search</a>
					  </div>
				</div>
			</div>
			)
	}
}