import React from "react";

class User extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div id='userinfo'>
        <img src={user.avatar_url} />
        <a href={user.html_url} target='_blank'><h3>{user.name}</h3></a>
        <p>@{user.login}</p>
        <p>Repos: 60</p>
        <p>Followers: 35</p>
        <p>Following: 39</p>
      </div>
    )
  }
}

export default User;