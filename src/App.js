import React from 'react';
import './App.css';
import Post from './components/Post';
import Display from './components/Display';



class App extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    hits: [],
  };
}
  componentDidMount() {
  fetch('https://growthplug-facebook.herokuapp.com/display_users/')
    .then(response => response.json())
    .then(data => this.setState({ hits: data }));
}

  render() {
    const { hits } = this.state;
    return (
      <div className="App">
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80">
      <Post />
    </main>
  </article>
  <Display data={hits}/>
      </div>
    );
  }
}


export default App;
