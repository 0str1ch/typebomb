import Link from "next/link";
import JsLogo from "./JsLogo";
import MessageIcon from "./MessageIcon";
import SettingsIcon from "./SettingsIcon";

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
          <a>
            <MessageIcon />
            <span>Message</span>
          </a>
        </Link>
      </li>

      <li>
        <Link prefetch href="/about">
          <a>
            <MessageIcon />
            <span>Message</span>
          </a>
        </Link>
      </li>

      <li>
        <Link prefetch href="/about">
          <a>
            <MessageIcon />
            <span>Message</span>
          </a>
        </Link>
      </li>

      <li>
        <Link prefetch href="/about">
          <a>
            <SettingsIcon />
            <span>Settings</span>
          </a>
        </Link>
      </li>
    </ul>
    <style jsx global>{`
      .navIcon {
        fill: var(--primary);
        position: relative;
        height: 1.5rem;
        width: 100%;
        transition: fill 100ms ease-in;
      }

      .navWrapper {
        backface-visibility: hidden;
      }

      @media screen and (min-width: 60em) {
        .navWrapper {
          display: flex;
        }
      }

       {
        /* .navPanel:before,
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
      } */
      }

      .navList {
        display: flex;
        flex-direction: column;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        place-items: center;
        height: 100vh;
        width: 6vw;
        position: fixed;
        top: 0;
        z-index: 20;
        background: rgba(255, 255, 255, 0.97);
        box-shadow: 1px 0px 0 0 var(--shadow);
      }

      .navList a {
        color: var(--secondary);
        z-index: 30;
        display: block;
      }

      .navList > li > a:hover,
      .navList > li > a:focus {
        opacity: 0.75;
        -webkit-transform: translateY(3px);
        transform: translateY(3px);
      }

      .navList > li:nth-child(1) a:hover,
      .navList > li:nth-child(1) a:focus,
      .navList > li:nth-child(1) a:active {
        transform: none;
      }

      .navList > li > a {
        -webkit-transition: 0.1s;
        transition: 0.1s;
      }

      .navList > li {
        margin-bottom: 1.5rem;
      }

      .navList > li:nth-child(1) {
        margin-bottom: 3rem;
      }

      .navList > li > a:hover > span,
      .navList > li > a:focus > span {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }

      .navList > li > a > span {
        display: block;
        transform: translateX(-200px);
        transition: 0.1s;
        text-align: center;
        font-size: 1vw;
        margin-top: 2%;
      }

      .navList:hover > li:nth-child(2) span,
      .navList:focus > li:nth-child(2) span {
        transition-delay: 0.02s;
      }

      .navList:hover > li:nth-child(3) span,
      .navList:focus > li:nth-child(3) span {
        transition-delay: 0.04s;
      }

      .navList:hover > li:nth-child(4) span,
      .navList:focus > li:nth-child(4) span {
        transition-delay: 0.08s;
      }

      .navList:hover > li:nth-child(5) span,
      .navList:focus > li:nth-child(5) span {
        transition-delay: 0.1s;
      }

      .navList:hover > li > a > span,
      .navList:focus > li > a > span {
        transform: translateX(0);
      }

      .navList > li > a:hover > div > svg,
      .navList > li > a:focus > div > svg {
        fill: red;
      }

      .navList li:first-of-type a {
        color: var(--primary);
      }
    `}</style>
  </nav>
);

export default Header;
