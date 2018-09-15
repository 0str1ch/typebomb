import React, { Component } from "react";
import MobileMenu from "./MobileMenu";
import JsLogo from "../components/JsLogo";

class MobileNav extends Component {
  constructor() {
    super();

    this.state = {
      MobileMenuVisible: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.state.MobileMenuVisible
      ? this.setState({ MobileMenuVisible: false })
      : this.setState({ MobileMenuVisible: true });
  }

  render() {
    return (
      <nav className="navWrapper--mobile">
        <div to="/" className="navWrapper--mobile">
          <a href="/" className="">
            <JsLogo />
          </a>

          <div className="" onClick={this.handleClick}>
            <img
              src="../static/burger.svg"
              alt="MobileMenu"
              className="menuButton"
              onClick={this.handleClick}
            />
          </div>
        </div>

        {this.state.MobileMenuVisible && <MobileMenu />}
        <style jsx global>{`
          .navWrapper--mobile {
            display: flex;
          }

          @media screen and (min-width: 60em) {
            .navWrapper--mobile {
              display: none;
            }
          }

          .menuButton {
            height: 3em;
            z-index: 1000;
            position: relative;
          }

          nav.mobileNav:before {
            content: "";
            position: fixed;
            display: block;
            height: 4px;
            background: var(--primary);
            background: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045);
            width: 100%;
            top: 0;
            z-index: 1000;
          }
        `}</style>
      </nav>
    );
  }
}

export default MobileNav;
