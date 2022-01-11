import React from 'react';

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>GitHub Info</h1>
        <form>
          <input placeholder={'Search GitHub...'} />
          <button>Search</button>
        </form>
        <img src='https://avatars.githubusercontent.com/u/72590723?v=4' />
        <a href='https://github.com/ryanghoward' target='_blank'><h3>Ryan G. Howard</h3></a>
        <p>@ryanghoward</p>
        <p>Repos: 60</p>
        <p>Followers: 35</p>
        <p>Following: 38</p>
      </div>
    );
  }
}

export default App;
