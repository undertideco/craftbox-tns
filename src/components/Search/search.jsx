import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div className="dtc w-60 v-mid">
        <input className="w-90" type="text" />
        <input className="w-10" type="submit" value="Search" />
      </div>
    );
  }
}
