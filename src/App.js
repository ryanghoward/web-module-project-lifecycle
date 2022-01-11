import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';

class App extends React.Component {
  state = {
    currentUser: 'ryanghoward',
    user: {
      avatar_url: 'https://avatars.githubusercontent.com/u/72590723?v=4',
      html_url: 'https://github.com/ryanghoward',
      name: 'Ryan G. Howard',
      login: 'ryanghoward',
      location: 'Los Angeles, CA',
      public_repos: '60',
      followers: '35',
      following: '39'
    },
    followers: [
      {
        login: 'PriscilaMonteiro',
        avatar_url: 'https://avatars.githubusercontent.com/u/77358128?v=4',
        html_url: 'https://github.com/PriscilaMonteiro'
      },
      {
        login: 'PriscilaMonteiro',
        avatar_url: 'https://avatars.githubusercontent.com/u/77358128?v=4',
        html_url: 'https://github.com/PriscilaMonteiro'
      },
      {
        login: 'PriscilaMonteiro',
        avatar_url: 'https://avatars.githubusercontent.com/u/77358128?v=4',
        html_url: 'https://github.com/PriscilaMonteiro'
      }
    ]
  }

  render() {
    return(
      <div>
        <h1>GitHub Info</h1>
        <form>
          <input placeholder={'Search GitHub...'} />
          <button>Search</button>
        </form>
        <User user={this.state.user} />
        <FollowerList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
