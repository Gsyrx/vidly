import React, { Component } from 'react';
import Movies from './components/movies';
import './App.css';
class App extends Component {
  render() {
    return (
      <main className="container">
        <Movies />
      </main>
    );
  }
}

export default App;

/*
  if there is nothing in opening and closing tags,
  then use self closing tags
  ie <Movies />
  but
  if there is something to write then
  <Movies>{...}</Movies>
*/
