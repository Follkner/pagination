import React from 'react';
import './Pagination.css';

class Pagination extends React.Component {
    constructor() {
    super();
    this.state = {
      todos: new Array(20), 
      currentPage: localStorage.getItem('currentPosBtn') || 0,
      todosPerPage: 5,
    };
    this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount() {

        const { currentPage } = this.state;
        
        this.props.update(currentPage - 1);
        
    }

  handleClick(event) {

    const newCurrentPage = Number(event.target.id) + 1;

    this.setState({
      currentPage: newCurrentPage,
    });

    localStorage.setItem('currentPosBtn', newCurrentPage);

    this.props.update(newCurrentPage-1);

  }



  render() {
    const { todos, currentPage, todosPerPage } = this.state;

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {

        const className = (number == currentPage) ? 'btn active': 'btn'; 

        return (
            <li
              className = {className} 
              key={number}
              id={number-1}
              onClick={this.handleClick}

            >
              {number}
            </li>
      );
    });

    return (
      <div>
        
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>

      </div>
    );
  }
}

export default Pagination;