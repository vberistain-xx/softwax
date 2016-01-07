'use strict';

import React from 'react';
import HeaderComponent from './layout/HeaderComponent';
import LoginComponent from './admin/LoginComponent';


export default ( props ) => {
  return (
    <div className="container">
      <HeaderComponent />
      <LoginComponent />
    </div>
  );
}
