import React, { Component } from 'react';

export default class Results extends Component {
	render(){
		return(
			<div className="container mt-5">
				<div className="card">
				  <div className="card-header text-center">
				    <h3>Results</h3>
				  </div>
				  	<div className="card-body">
					{/*for each result (limited to five articles max), render a card with the data gotten from the API: article title, date, and url. Also render a save button*/}
				  	</div>
				</div>
			</div>

			)
	}
}