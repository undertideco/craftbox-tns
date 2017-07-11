import React, { Component } from 'react';
import Link from 'gatsby-link';
import styles from './styles.css';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <ul styles={styles}>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/product">Somewhere Else</Link>
        </ul>
      </div>
    );
  }
}
