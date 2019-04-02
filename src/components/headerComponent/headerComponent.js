import React from 'react';

export default class HeaderComponent extends React.Component {

    render() {
        return(
            <header>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top">
                  <a className="navbar-brand" href="/">
                    <img alt="header" src="/images/logo.JPG" />
                  </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
    
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                        <a className="nav-link" href="/">Categories</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">Notification</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">Login/Sign Up</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">Help</a>
                      </li>
                    </ul>
                  </div>
                </nav>
            </div>
        </header>
        )
    }
}