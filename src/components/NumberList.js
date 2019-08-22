import React from 'react';
import { connect } from 'react-redux';
import { fetchContacts, addFavourite } from '../actions';
import styles from './NumberList.module.css';
import { Link } from 'react-router-dom';

class NumberList extends React.Component{
  state = {
    search: '',
  }

  componentDidMount(){
    this.props.fetchContacts();
  }

  renderList() {

    let filteredContacts = this.props.numbers.filter(number => {
      return number.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    });

    if(filteredContacts.length === 0 && this.state.search){
      return <div style={{fontSize : '2em'}}>No matches found!</div>
    } else {

    return filteredContacts.map((number, index) => {
      if (number.userId === this.props.currentUserId){
      return (
        <div key={index}>
          <div className={styles.NumberItem}>
            <div className={styles.container}>
              <Link to={`/contacts/${number.id}`} className="header"><h4>{number.name}</h4></Link>
              <p>{number.phonenumber}</p>
              <p>{number.Address}</p>
              <div className="right floated content">
                <Link to={`/contacts/edit/${number.id}`} className="ui button primary">
                  Edit
                </Link>
                <Link to={`/contacts/delete/${number.id}`} className="ui button negative">
                  Delete
                </Link>
                <button className="ui button green" onClick={this.props.addFavourite(number)}>Like</button>
              </div>
            </div>
          </div>
        </div>
          )
        }
      }
    )}
}

  onChange = e => {
    this.setState({search: e.target.value});
  }

  sortAscending = () => {
    const sortedByAscending = this.props.numbers.sort(function(a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
        });

      this.setState({sortedByAscending});
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div className={styles.create}>
          <Link to="/contacts/new" className="ui button primary">
            <i className="edit icon" style={{margin: '0'}}></i> Add
          </Link>
        </div>
    );
    }
  }

  renderAlert(){
    if (!this.props.isSignedIn){
      return <div>Login to use App</div>
    }
  }

  render(){
    return (
      <div className={styles.List}>
        <div className={styles.features}>
          <input className={styles.search} placeholder="Search" onChange={this.onChange} ></input>
          <button onClick={this.sortAscending} className="ui blue button">Sort</button>
          {this.renderCreate()}
        </div>
        <div>{this.renderList()}</div>
        <div>{this.renderAlert()}</div>
      </div>
    )
  }
}

  const mapStateToProps = state => {
    return {
      numbers: Object.values(state.numbers),
      currentUserId: state.auth.userId,
      isSignedIn: state.auth.isSignedIn
    };
  }

export default connect(mapStateToProps, { fetchContacts, addFavourite })(NumberList);
