import React, { Component } from 'react';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { username: state.username }
}

export default Users
