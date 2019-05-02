import React, { Component } from 'react';

class Users extends Component {

  render() {
    let users = this.props.user((user, index) => <li key={index}>{user.username}</li>)
    return (
      <div>
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
