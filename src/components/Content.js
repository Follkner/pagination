import React, {Component} from 'react';
import './Content.css';
import User from './User';
import Pagination from './Pagination';

class Content extends Component {

	constructor(){
		super();

		this.state = {
			st_names : [],
			st_surnames : [],
			st_descs : [],
			st_id : [],

			position: 0,
		}
		this.updateState = this.updateState.bind(this);
	}

	componentDidMount(){
		const URL = 'http://dev.frevend.com/json/users.json';

		let request = new XMLHttpRequest();
		request.open('GET', URL);
		let that = this;
		request.onreadystatechange = function(e){
			if(this.readyState === 4 && this.status === 200){
				let response = JSON.parse(this.response);
				
				const names = [];
				const surnames = [];
				const descs = [];
				const id = [];

				for(let i = 0; i < response.users.length; i++){

					names.push(response.users[i].name);
					surnames.push(response.users[i].surname);
					descs.push(response.users[i].desc);
					id.push(response.users[i].id);

				}
				
				that.setState({
					st_names: names,
					st_surnames: surnames,
					st_descs: descs,
					st_id: id,
				});

			}else{
				//console.log('Exception')
			}
		
		}

		
		

		request.send(null);

	};
	
	updateState(index) {
        this.setState({position: index})
    };


    getSurname(i){
    	return this.state.st_surnames[i];	
    }

	render(){

		const users = [];

		//let koef = this.state.position;

		const { 
			position, 
			st_names, 
			st_surnames, 
			st_descs, 
			st_id 
		} = this.state;

		if(st_id.length) {

			for(let i = position * 5; i < (position+1)*5; i++){
				/*console.log(i);*/
				const user = (
					<User 
						key = {st_id[i]}
						name = {st_names[i]}
						surname = {st_surnames[i]}
						desc = {st_descs[i]}
						id = {st_id[i]}
					/>
				);

				users.push(user);
			}

		}


		return (
		<div>
			<Pagination update ={this.updateState}/>
			<div className = 'content'>

				{users}

				{/*<User name = {this.state.st_names[koef*5 + 0]}
					  surname = {this.state.st_surnames[koef*5 + 0]}
					  desc = {this.state.st_descs[koef*5 + 0]}
					  id = {this.state.st_id[koef*5 + 0]}

				/>
				<User name = {this.state.st_names[koef*5 + 1]}
					  surname = {this.state.st_surnames[koef*5 + 1]}
					  desc = {this.state.st_descs[koef*5 + 1]}
					  id = {this.state.st_id[koef*5 + 1]}
				/>
				<User name = {this.state.st_names[koef*5 + 2]}
					  surname = {this.state.st_surnames[koef*5 + 2]}
					  desc = {this.state.st_descs[koef*5 + 2]}
					  id = {this.state.st_id[koef*5 + 2]}
				/>
				<User name = {this.state.st_names[koef*5 + 3]}
					  surname = {this.state.st_surnames[koef*5 + 3]}
					  desc = {this.state.st_descs[koef*5 + 3]}
					  id = {this.state.st_id[koef*5 + 3]}
				/>
				<User name = {this.state.st_names[koef*5 + 4]}
					  surname = {this.state.st_surnames[koef*5 + 4]}
					  desc = {this.state.st_descs[koef*5 + 4]}
					  id = {this.state.st_id[koef*5 + 4]}
				/>*/}


			</div>

			
		</div>
		)
	}
	

}

export default Content;