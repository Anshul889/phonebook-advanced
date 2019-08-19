import React from 'react';
import { connect } from 'react-redux';
import { fetchContact } from '../actions';

class ContactShow extends React.Component {
  componentDidMount() {
    this.props.fetchContact(this.props.match.params.id)
  }
  render() {
    if(!this.props.number) {
      return <div>Loading...</div>
    }

    const { name, phonenumber } = this.props.number;

    return (
      <div style={{width: '80%', margin: '0 auto', paddingTop: '10px'}}>
        <h1>{name}</h1>
        <h5>{phonenumber}</h5>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { number: state.numbers[ownProps.match.params.id]};
};

export default connect(mapStateToProps, { fetchContact })(ContactShow);
