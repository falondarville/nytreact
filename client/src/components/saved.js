import React, { Component } from 'react';

export default class Saved extends Component {
	render(){
		return(
			<div className="container mt-5">
				<div className="card">
				  <div className="card-header text-center">
				    <h3>Saved Articles</h3>
				  </div>
				  	<div className="card-body">
					{/*conditionally render the saved articles, given that there are some*/}
				  	</div>
				</div>
			</div>

			)
	}
}