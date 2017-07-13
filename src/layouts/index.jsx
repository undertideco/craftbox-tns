import React from 'react';
import Navigation from '../components/Navigation/navigation';

export default class Template extends React.Component {
  render() {
    return (
      <div className="root-container">
        <Navigation />
        {this.props.children()}
      </div>
    );
  }
}
