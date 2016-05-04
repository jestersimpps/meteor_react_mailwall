import React from 'react';

export class Login extends React.Component {
  render() {
    return (
      <div className="form-box">
        <form >

          <div className="header dev">
            <center>
              <a href="/"><img src="/img/mwmwsmall.png" width="50"/></a>
            </center>
          </div>
          <div className="body bg-gray">
            <ul >
              <li className="red-text">
                error
              </li>
            </ul>
            <div className="input-group">
              <input type="text" className="form-control" ngControl="name" placeholder="Username"/>
              <span className="input-group-addon">@mailwall.me</span>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" ngControl="password" placeholder="Password"/>
            </div>
          </div>

          <div className="footer">
            <button type="submit" className="btn btn-large btn-success btn-block">Login</button>
          </div>

        </form>

      </div>
    )
  }
}
