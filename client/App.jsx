import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react';
import {mount} from 'react-mounter';

//layouts
import {HomeLayout} from './layouts/home_layout.jsx';
import {EmptyLayout} from './layouts/empty_layout.jsx';
import {AuthLayout} from './layouts/auth_layout.jsx';
import {PublicWallLayout} from './layouts/publicwall_layout.jsx';
import {PrivateWallLayout} from './layouts/privatewall_layout.jsx';

//components
import {Home} from './components/home/home.jsx';
import {Login} from './components/auth/login.jsx';
import {Register} from './components/auth/register.jsx';
import {PrivateWall} from './components/privatewall/privatewall.jsx';
import {PublicWall} from './components/publicwall/publicwall.jsx';

FlowRouter.route('/', {
  action() {
    mount(HomeLayout, {content: (<Home/>)})
  }
})
FlowRouter.route('/register', {
  action() {
    mount(AuthLayout, {content: (<Register/>)})
  }
})
FlowRouter.route('/login', {
  action() {
    mount(AuthLayout, {content: (<Login/>)})
  }
})
FlowRouter.route('/public', {
  action() {
    mount(PublicWallLayout, {content: (<PublicWall/>)})
  }
})
FlowRouter.route('/private', {
  action() {
    mount(PrivateWallLayout, {content: (<PrivateWall/>)})
  }
})
