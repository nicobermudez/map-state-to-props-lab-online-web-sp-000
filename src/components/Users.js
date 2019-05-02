import React, { Component } from 'react';

class Users extends Component {

  render() {
    let users = this.props.user
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
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
