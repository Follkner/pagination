import React, {Component} from 'react';
import './User.css';


class User extends Component {

	render(){

		return (
		<div className = 'user'>
			<p>{this.props.name}</p>
			<p>{this.props.surname}</p>
			<p>{this.props.desc}</p>
			<p>{this.props.id}</p>
		</div>
		)
	}	

}

export default User;