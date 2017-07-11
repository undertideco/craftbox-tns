import React from 'react';
import Navigation from '../components/Navigation';
import Search from '../components/Search';
import indexStyle from './index.css';

export default class Template extends React.Component {
  render() {
    return (
      <div className="root-container" styles={indexStyle}>
        <div className="header">
          <img className="icon" src="http://via.placeholder.com/40x40" alt=""/>
          <div className="title">
            <span
              style={{
                fontSize: '2em',
                fontWeight: '600',
                color: 'white',
              }}
            >CraftBox</span>
          </div>
          <div
            style={{
              flexGrow: '1',
            }}
          >
            <Navigation />
          </div>
          <Search />
        </div>
        <div className="content">
          {this.props.children()}
        </div>
      </div>
    );
  }
}
