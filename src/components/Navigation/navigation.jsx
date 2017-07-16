import React from 'react';
import Search from '../Search/search';

const Navigation = ({ children }) => (
  <div className="flex flex-column flex-row-ns justify-left w-100 pa3 bg-blue">
    <h1 className="f3 w-100 w-20-ns white lh-title self-center ma0 mb2 ma0-ns">CraftBox</h1>
    <Search />
    <div className="self-center-ns w-20-ns tl tr-ns">
      {children}
    </div>
  </div>
);

export default Navigation;

Navigation.propTypes = {
  children: React.ReactNode,
};

Navigation.defaultProps = {
  children: {},
};
