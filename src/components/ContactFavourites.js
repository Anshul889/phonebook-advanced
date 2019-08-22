import React from 'react';
import { connect } from 'react-redux';
import { fetchFavourites, removeFavourite } from '../actions';
import { Link } from 'react-router-dom';
import styles from './ContactFavourites.module.css';

class ContactFavourites extends React.Component {
  componentDidMount(){
    this.props.fetchFavourites();
  }

  render(){
    return(
      this.props.favourites.map((number, index) => {
        return (
          <div key={index}>
            <div className={styles.NumberItem}>
              <div className={styles.container}>
                <Link to={`/contacts/${number.id}`} className="header"><h4>{number.name}</h4></Link>
                <p>{number.phonenumber}</p>
                <div className="right floated content">
                  <Link to={`/contacts/edit/${number.id}`} className="ui button primary">
                    Edit
                  </Link>
                  <Link to={`/contacts/delete/${number.id}`} className="ui button negative">
                    Delete
                  </Link>
                  <button className="ui button green" onClick={() => this.props.removeFavourite(number)}>Like</button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    )
  )
  }
}

const mapStateToProps = state => {
  return {
    favourites: Object.values(state.favourites),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(mapStateToProps, { fetchFavourites, removeFavourite })(ContactFavourites);
