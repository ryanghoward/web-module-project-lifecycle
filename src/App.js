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
        <div id='userinfo'>
          <img src='https://avatars.githubusercontent.com/u/72590723?v=4' />
          <a href='https://github.com/ryanghoward' target='_blank'><h3>Ryan G. Howard</h3></a>
          <p>@ryanghoward</p>
          <p>Repos: 60</p>
          <p>Followers: 35</p>
          <p>Following: 39</p>
        </div>
        <div id="followers">
          <div className="follower">
            <img width='200px' src='https://avatars.githubusercontent.com/u/77358128?v=4' />
            <a href='https://github.com/PriscilaMonteiro' target='_black'><p>PriscilaMonteiro</p></a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
