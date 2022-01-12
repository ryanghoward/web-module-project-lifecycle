import React from "react";

class User extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div id='userinfo'>
        <img src={user.avatar_url} />
        <a href={user.html_url} target='_blank'><h3>{user.name}</h3></a>
        <p>Username: {user.login}</p>
        <p>Location: {user.location}</p>
        <p>Repos: {user.public_repos}</p>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
      </div>
    )
  }
}

export default User;