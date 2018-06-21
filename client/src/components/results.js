import React, { Component } from 'react';
import axios from 'axios';

export default class Results extends Component {

	handleSubmit = (event, article) => {

		console.log(event);
		axios.post('http://localhost:3000/api/articles', event)
			.then(function(response){
				console.log('we got response');
			})
			.catch(function(error){
				console.log(error);
		})
	}

	render(){

		let self = this;

		return(
			<div className={"container mt-5 " + (this.props.articles.length === 0 ? 'hide' : 'show')}>
				<div className="card">
				  <div className="card-header text-center">
				    <h3>Results</h3>
				  </div>
				  	<div className="card-body">
				  	{this.props.articles.map(function(article, i){
				  		return <div key={i}>
				  		<p>{article.headline.main}</p>
				  		<p >{article.web_url}</p>
				  		<p>{article.pub_date}</p>
				  		<button onClick={() => {self.handleSubmit(article)}}>Save</button>
				  		</div>
				  	})}
				  	</div>
				</div>
			</div>

			)
	}
}