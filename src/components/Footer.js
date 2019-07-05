import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo-gradient.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import linkedin from '../img/social/linkedin.svg'
import medium from '../img/social/medium.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="FluentUp"
            style={{  height: '4em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <a className="navbar-item" href="https://www.fluentup.com/">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="navbar-item" href="https://www.fluentup.com/why-join">
                        Why Join
                      </a>
                    </li>  
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <a className="navbar-item" href="https://fluentup.com/contact-us">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/fluentup">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="medium" href="https://medium.com/@fluentup">
                  <img
                    className="fas fa-lg"
                    src={medium}
                    alt="Medium"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/fluentup/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="linkedin" href="https://www.linkedin.com/company/fluentup/">
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
