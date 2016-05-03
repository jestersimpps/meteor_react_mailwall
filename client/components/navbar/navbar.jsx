import React from 'react';

export class NavBar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-fixed-top black z-depth-1">
        <div class="container-fluid">
          <div class="navbar-header">

            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-collapse-1">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar white"></span>
              <span class="icon-bar white"></span>
              <span class="icon-bar white"></span>
            </button>

            <div class="navbar-brand">
              <a href="/">
                <img src="/img/mwmwsmall.png" width="85"/>
              </a>
            </div>

            <div class="collapse navbar-collapse" id="bs-navbar-collapse-1">

              <ul class="nav navbar-nav navbar-right">
                <li>
                  <a class="white-text">Register</a>
                </li>
                <li>
                  <a class="white-text">Login</a>
                </li>
              </ul>

              <ul class="nav navbar-nav">
                <li class="">
                  <a href="/">
                    <i class="fa fa-users"></i>
                    Public
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="active">
                  <a href="">
                    <i class="fa fa-lock"></i>
                    Private
                  </a>
                </li>
              </ul>

              <ul class="nav navbar-nav navbar-right">
                <li>
                  <a href="mailto:@mailwall.me">
                    <i class="fa fa-user"></i>
                    <font color="white">
                      @mailwall.me</font>
                  </a>
                </li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                    <i class="fa fa-cog"></i>
                    Settings
                    <span class="caret"></span>
                  </a>
                  <ul class="dropdown-menu" role="menu">
                    <li>
                      <a href="#">
                        <i class="fa fa-cogs"></i>
                        Account settings</a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-envelope-o"></i>
                        Mail authorisation</a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-users"></i>
                        Mail groups</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                      <a href="">Logout</a>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul class="nav navbar-nav navbar-right">
                <li>
                  <a class="white-text">Profile</a>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </nav>
    )
  }
}
