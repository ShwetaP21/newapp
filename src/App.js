
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

export default class App extends Component {
  pageSize=6
  apiKey=process.env.REACT_APP_NEWS_API
  render() {
    return (
      <>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path ="/"><NewsComponent apiKey={this.apiKey}  key='general' pageSize={this.pageSize} country='in' category='general'/></Route>
          <Route exact path ="/business"><NewsComponent apiKey={this.apiKey}  key='business' pageSize={this.pageSize} country='in' category='business'/></Route>
          <Route exact path ="/entertainment"><NewsComponent apiKey={this.apiKey}  key='entertainment' pageSize={this.pageSize} country='in' category='entertainment'/></Route>
          <Route exact path ="/general"><NewsComponent apiKey={this.apiKey}  key='general' pageSize={this.pageSize} country='in' category='general'/></Route>
          <Route exact path ="/health"><NewsComponent apiKey={this.apiKey}  key='health' pageSize={this.pageSize} country='in' category='health'/></Route>
          <Route exact path ="/science"><NewsComponent apiKey={this.apiKey}  key='science' pageSize={this.pageSize} country='in' category='science'/></Route>
          <Route exact path ="/sports"><NewsComponent apiKey={this.apiKey}  key='sports' pageSize={this.pageSize} country='in' category='sports'/></Route>
          <Route exact path ="/technology"><NewsComponent apiKey={this.apiKey}  key='technology' pageSize={this.pageSize} country='in' category='technology'/></Route>

        </Switch>
      </Router>
      </>
    )
  }
}

