import {FlowRouter} from 'meteor/kadira:flow-router'
import React from 'react';
import {mount} from 'react-mounter';

//layouts
import {HomeLayout} from './layouts/homeLayout.jsx';
import {EmptyLayout} from './layouts/emptyLayout.jsx';

//components
import {Home} from './components/home/home.jsx';

FlowRouter.route('/', {
  action() {
    mount(HomeLayout, {content: (<Home/>)})
  }
})
