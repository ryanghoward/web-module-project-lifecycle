import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
  render() {
    return (
      <div className="followers">
        {
          this.props.followers.map(follower => {
            return (
              <Follower follower={follower} key={follower.login} />
            );
          })
        }
      </div>
    )
  }
}

export default FollowerList;