import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <IndexLink to="/" className="navbar-brand">Redux Simple Router</IndexLink>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to={`/counter`}>Counter</Link></li>
                <li><Link to={`/search500px`}>Search500pxPhto</Link></li>
                <li><a target="_blank" href="https://github.com/neighborhood999">My GitHub</a></li>
                <li><a target="_blank" href="http://chentsulin.github.io/redux/">redux 中文文件</a></li>
                <li><a target="_blank" href="http://facebook.github.io/react/">Reactjs</a></li>
              </ul>
            </div>
           </div>
        </nav>
        <div className="jumbotron text-center">
            <div className="container">
                <h2>We ♥ redux</h2>
                <i>react redux router</i>
                <p>redux ↔ react-router-redux ↔ history ↔ react-router</p>
            </div>
       </div>
      </div>
    );
  }
}
