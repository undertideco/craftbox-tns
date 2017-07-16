import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div className="w-60-ns w-100 v-mid-l mb2 ma0-ns self-center">
        <fieldset className="cf bn ma0 pa0">
          <div className="cf">
            <label className="clip" htmlFor="email-address">Email Address</label>
            <input className="f6 f5-l input-reset bn fl black-80 bg-white pa2 lh-solid w-80 br2-ns br--left-ns" placeholder="Search" type="text" />
            <input className="f6 f5-l button-reset fl pv2 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-20 br2-ns br--right-ns" type="submit" value="Go"/>
          </div>
        </fieldset>
      </div>
    );
  }
}
