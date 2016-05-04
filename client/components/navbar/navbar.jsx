import React from 'react';

export class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-fixed-top black z-depth-1">
        <div className="container-fluid">

            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar white"></span>
              <span className="icon-bar white"></span>
              <span className="icon-bar white"></span>
            </button>

            <div className="navbar-brand">
              <a href="/">
                <img src="/img/mwmwsmall.png" width="85"/>
              </a>
            </div>

            <div className="collapse navbar-collapse" id="bs-navbar-collapse-1">

              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a className="white-text" href="/register">Register</a>
                </li>
                <li>
                  <a className="white-text" href="/login">Login</a>
                </li>
              </ul>

              <ul className="nav navbar-nav">
                <li className="">
                  <a href="/">
                    <i className="fa fa-users"></i>
                    Public
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="active">
                  <a href="">
                    <i className="fa fa-lock"></i>
                    Private
                  </a>
                </li>
              </ul>

              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="mailto:@mailwall.me">
                    <i className="fa fa-user"></i>
                    <font color="white">
                      @mailwall.me</font>
                  </a>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                    <i className="fa fa-cog"></i>
                    Settings
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <a href="#">
                        <i className="fa fa-cogs"></i>
                        Account settings</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope-o"></i>
                        Mail authorisation</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-users"></i>
                        Mail groups</a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="">Logout</a>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a className="white-text" href="" >Profile</a>
                </li>
              </ul>

            </div>
        </div>
      </nav>
    )
  }
}
