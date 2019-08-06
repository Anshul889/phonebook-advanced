import React from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions';
import NumberItem from './NumberItem';
import styles from './NumberList.module.css';
import { Link } from 'react-router-dom';

class NumberList extends React.Component{
  state = {
    search: '',
  }

  componentDidMount(){
    this.props.fetchContacts();
  }

  renderAdmin(contact) {
    if (contact.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/contacts/edit/${contact.id}`} className="ui button primary">
            Edit
          </Link>
          <Link to={`/contacts/delete/${contact.id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    let filteredContacts = this.props.numbers.filter(number => {
      return number.name.toLowerCase().indexOf(this.state.search) !== -1;
    });

    return filteredContacts.map(number => {
      return (
        <div key={number.phonenumber}>
          {this.renderAdmin(number)}
          <NumberItem
            title={number.name}
            phonenumber={number.phonenumber}
            address={number.Address}
            />
        </div>
      )
    })
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
        <div className={styles.create} style={{ textAlign: 'right'}}>
          <Link to="/contacts/new" className="ui button primary">
            Create Stream
          </Link>
      </div>
    );
    }
  }

  render(){
    return (
      <div className={styles.List}>
        <div className={styles.features}>
          <input placeholder="Search" onChange={this.onChange} ></input>
          <button onClick={this.sortAscending} className="ui blue button">Sort By Name</button>
          {this.renderCreate()}
        </div>
        <div>{this.renderList()}</div>
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

export default connect(mapStateToProps, { fetchContacts })(NumberList);
