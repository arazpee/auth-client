import React from 'react';
import Header from './Header';
import "./AppStyle.scss";

export default ({ children }) => {
  return (
    <div id="all">
      <Header />
      <div className="container" id="main1">
        {children}
      </div>
    </div>
  );
};
