import React from 'react';
import Navigation from '../components/Navigation';
import Search from '../components/Search';
import headerStyle from './header.css';

export default class Template extends React.Component {
  render() {
    return (
      <div>
        <div className="header" styles={headerStyle}>
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
        {this.props.children()}
      </div>
    );
  }
}
