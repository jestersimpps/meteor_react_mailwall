import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react';
import {mount} from 'react-mounter';

//layouts
import {HomeLayout} from './layouts/homeLayout.jsx';
import {EmptyLayout} from './layouts/emptyLayout.jsx';
import {AuthLayout} from './layouts/authLayout.jsx';

//components
import {Home} from './components/home/home.jsx';
import {Login} from './components/auth/login.jsx';
import {Register} from './components/auth/register.jsx';

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
