import React from 'react';
import {NavBar} from '../components/navbar/navbar.jsx';

export const PrivateWallLayout = ({content}) => (
  <div>
    <NavBar/>
    <div className="container-fluid ">
      <div className="navpage">
        {content}
      </div>
    </div>
  </div>
)
