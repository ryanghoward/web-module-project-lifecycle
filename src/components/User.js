import React from "react";

class User extends React.Component {
  render() {
    return (
      <div id='userinfo'>
        <img src='https://avatars.githubusercontent.com/u/72590723?v=4' />
        <a href='https://github.com/ryanghoward' target='_blank'><h3>Ryan G. Howard</h3></a>
        <p>@ryanghoward</p>
        <p>Repos: 60</p>
        <p>Followers: 35</p>
        <p>Following: 39</p>
      </div>
    )
  }
}

export default User;