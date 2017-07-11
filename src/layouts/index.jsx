import React from 'react';
import Navigation from '../components/Navigation';

export default class Template extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <img src="http://lorempixel.com/40/40/" alt=""/>
          <span>CraftBox</span>
          <Navigation />
        </div>
        {this.props.children()}
      </div>
    );
  }
}
