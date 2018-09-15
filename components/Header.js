import Link from "next/link";
import JsLogo from "./JsLogo";

const Header = () => (
  <nav className="navWrapper">
    <ul className="navList">
      <li>
        <Link prefetch href="/">
          <a>
            <JsLogo />
          </a>
        </Link>
      </li>

      <li>
        <Link prefetch href="/about">
          <a>About</a>
        </Link>
      </li>

      <li>
        <Link prefetch href="/about">
          <a>Work</a>
        </Link>
      </li>

      <li>
        <Link prefetch href="/about">
          <a>Contact</a>
        </Link>
      </li>

      <li>
        <Link prefetch href="/typing">
          <a>Blog</a>
        </Link>
      </li>
    </ul>
    <div className="today" />
    <style jsx>{`
      .menuButton {
        height: 3em;
      }

      .navWrapper {
        background-color: transparent;
        width: 100%;
        position: fixed;
        display: none;
        height: 5em;
        place-items: center center;
        background: rgba(255, 255, 255, 0.97);
        box-shadow: 0 1px 0 0 rgba(235, 237, 242, 0.6);
        z-index: 100;
      }

      @media screen and (min-width: 60em) {
        .navWrapper {
          display: flex;
        }
      }

      .navWrapper:before,
      .mobileNav:before {
        content: "";
        position: fixed;
        display: block;
        height: 4px;
        background: var(--primary);
        background: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045);
        width: 100%;
        top: 0;
        z-index: 10;
      }

      .navList {
        display: flex;
        place-items: center center;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        width: 100%;
        position: absolute;
        top: 0;
      }

      @media screen and (min-width: 48em) {
        .navList {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
      }

      .navList li {
        margin-right: 1.5rem;
      }

      .navList li:last-of-type {
        margin-right: 0;
      }

      .navList li a {
        color: var(--secondary);
      }

      .navList li:first-of-type a {
        color: var(--primary);
      }

      .today {
        display: none;
        position: absolute;
        right: 1.5rem;
        height: 100%;
        width: 10rem;
        place-items: center;
        padding-left: 1.5rem;
        box-shadow: -1px 0px 0 0 rgba(235, 237, 242, 0.6);
        color: var(--secondary);
      }

      @media screen and (min-width: 48em) {
        .today {
          display: flex;
        }
      }
    `}</style>
  </nav>
);

export default Header;
