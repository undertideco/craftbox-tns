import React from 'react';
import Search from '../Search/search';

const Navigation = ({ children }) => (
  <div className="dt w-100 pa3 bg-blue h3">
    <h1 className="dtc-ns dt-row f3 w-20 white lh-title v-mid-l">CraftBox</h1>
    <Search />
    <div className="dtc-ns dt-row v-mid-l tl tr-ns">
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
