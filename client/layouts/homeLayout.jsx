import React from 'react';
import {NavBar} from '../components/navbar/navbar.jsx';

export const HomeLayout = ({content}) => (
  <div>
    <NavBar/>
    <div className="homePage">
      {content}
    </div>
  </div>
)
