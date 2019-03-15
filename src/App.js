import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
class App extends Component {
  render() {
    return (
      <div className="App">
        {JSON.stringify(this.props)}
        <button>hola</button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  //simpleAction: () => dispatch(simpleAction('paco'))
})
const mapStateToProps = state => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(App);
