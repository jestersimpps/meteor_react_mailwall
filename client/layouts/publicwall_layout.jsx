import React from 'react';
import {NavBar} from '../components/navbar/navbar.jsx';

export const PublicWallLayout = ({content}) => (
  <div>
    <NavBar/>
    <div className="navpage">
      {content}
    </div>
  </div>
)
