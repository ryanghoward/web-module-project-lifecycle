import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>GitHub Info</h1>
        <form>
          <input placeholder={'Search GitHub...'} />
          <button>Search</button>
        </form>
        <User />
        <FollowerList />
      </div>
    );
  }
}

export default App;
