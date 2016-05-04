import React from 'react';

export class Register extends React.Component {
  render() {
    return (
      <div className="form-box">
        <form>
          <div className="header dev">
            <center>
              <a href="/">
                <img src="/img/mwmwsmall.png" width="50"/>
              </a>
            </center>
          </div>
          <div className="body">
            <ul >
              <li className="red-text">error</li>
            </ul>

            <div className="form-group">
              <label>Activation token:
              </label>
              <input type="text" className="form-control" ngControl="token" value="" placeholder="Activation token"/>
            </div>

            <label>Desired mailwall.me address:</label>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Username"/>
              <span className="input-group-addon" id="basic-addon2">@mailwall.me</span>
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">Verify</button>
              </span>
            </div>

            <div className="form-group">
              <label>Password:</label>
              <input type="password" className="form-control" placeholder="Password"/>
            </div>

          </div>
          <div className="footer">
            <button type="submit" className="btn btn-large btn-success btn-block">Create account</button>
          </div>
        </form>
      </div>
    )
  }
}
