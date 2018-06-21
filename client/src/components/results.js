import React, { Component } from 'react';

export default class Results extends Component {
	render(){
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
				  		<button>Save</button>
				  		</div>
				  	})}
				  	</div>
				</div>
			</div>
			)
	}
}