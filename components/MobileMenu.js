import Link from "next/link";
import JsLogo from "./JsLogo";

const MobileMenu = () => (
  <nav className="navWrapper--mobile">
    <ul className="navList--mobile">
      <li>
        <Link prefetch href="/">
          <a>
            Home
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
    <style jsx global>{`
      .navWrapper--mobile {
        background-color: transparent;
        width: 100%;
        position: fixed;
        display: flex;
        height: 50%;
        place-items: center center;
        background: rgba(255, 255, 255, 0.97);
        box-shadow: 0 1px 0 0 rgba(235, 237, 242, 0.6);
        z-index: 100;
      }

      .navList--mobile {
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
        .navList--mobile {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
      }

      .navList--mobile li {
        margin-right: 1.5rem;
      }

      .navList--mobile li:last-of-type {
        margin-right: 0;
      }

      .navList--mobile li a {
        color: var(--secondary);
      }

      .navList--mobile li:first-of-type a {
        color: var(--primary);
      }
    `}</style>
  </nav>
);

export default MobileMenu;
