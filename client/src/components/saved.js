import React, { Component } from 'react';
import axios from 'axios';

export default class Saved extends Component {

	handleDelete = (event, article) => {

		console.log(event);
		axios.delete('http://localhost:3000/api/articles/' + event._id, event)
			.then(function(response){
				console.log('we deleted');
			})
			.catch(function(error){
				console.log(error);
		})
	}

	constructor(){
		super();
		this.state = {
			articles: []
		}
		let self = this;


		setInterval(function(){
			axios.get('http://localhost:3000/api/articles')
			.then(function(response){
				self.setState({articles: response.data.articles})
			})
			.catch(function(error){
				console.log(error);
			})
		}, 800)
	}

	render(){
		let self = this;

		return(
			<div className={"container mt-5 " + (this.state.articles.length === 0 ? 'hide' : 'show')}>
				<div className="card">
				  <div className="card-header text-center">
				    <h3>Saved Articles</h3>
				  </div>
				  	<div className="card-body">
				  	{this.state.articles.map(function(article, i){
				  		return <div key={i}>
				  		<p>{article.title}</p>
				  		<p >{article.url}</p>
				  		<p>{article.date}</p>
				  		<button onClick={() => {self.handleDelete(article)}}>Delete</button>
				  		</div>
				  	})}
				  	</div>
				</div>
			</div>				  	

			)
	}
}