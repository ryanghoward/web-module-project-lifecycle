import React from "react";

class Follower extends React.Component {
  render() {
    const { follower } = this.props;

    return (
      <div className="follower">
        <a href={follower.html_url} target='_black'><p>{follower.login}</p></a>
        <img width='200px' src={follower.avatar_url} />
      </div>
    )
  }
}

export default Follower;