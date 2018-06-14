import React, { Component } from 'react';

export default class Search extends Component {
	render() {
		return(
			<div className="container">
				<div className="card">
				  <div className="card-header text-center">
				    <h3>Search</h3>
				  </div>
				  <div className="card-body">
				    <h4 className="card-text text-center">Topic</h4>
				    <input className="form-control form-control-lg" type="text" placeholder="Enter your search topic" />

				    <h4 className="card-text text-center">Start Year</h4>
				    <input className="form-control form-control-lg" type="text" placeholder="Enter the start year for your query" />

				    <h4 className="card-text text-center">End Year</h4>
				    <input className="form-control form-control-lg" type="text" placeholder="Enter the end year for your query" />

				    <a href="#" className="btn search-btn btn-primary float-right">Search</a>
				  </div>
				</div>
			</div>
			)
	}
}