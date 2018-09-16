export default () => (
  <style jsx global>{`
    :root {
      --primary: rgba(46, 62, 72, 1);
      --primary-light: rgba(255, 255, 255, 1);
      --secondary: rgba(46, 62, 72, 0.6);
      --secondary-light: rgba(255, 255, 255, 0.7);
      --hint: rgba(46, 62, 72, 0.35);
      --hint-light: rgba(255, 255, 255, 0.35);
      --error: #ff5b0f;
      --shadow: rgba(235,237,242,0.9);
      --h1-xl: ;
      --h2-large: ;
      --h3-medium: ;
      --h4-small: ;
      --text-large: ;
      --text-normal: ;
      --text-small: 0.75em;
    }

    html {
      font-size: 16px;
    }

    @media screen and (min-width: 36em) {
      html {
        font-size: calc(14px + 8 * ((100vw - 500px) / 1500));
      }
    }

    body {
      font-weight: 400;
      line-height: 1.45;
      color: #333;
    }

    p {
      margin-bottom: 1.3em;
      line-height: 1.45;
      color: var(--secondary);
    }

    h1,
    h2,
    h3,
    h4 {
      margin: 1.414rem 0 0.5rem;
      font-weight: inherit;
      line-height: 1.2;
      color: var(--primary);
    }

    h1 {
      margin-top: 0;
      font-size: 3.157em;
    }

    h2 {
      font-size: 2.369em;
    }

    h3 {
      font-size: 1.777em;
    }

    h4 {
      font-size: 1.333em;
    }

    small,
    .font_small {
      font-size: 0.75em;
    }

    * {
      -ms-font-feature-settings: "kern" 1, "liga" 1, "clig" 1, "alt" 1;
      -webkit-font-feature-settings: "kern" 1, "liga" 1, "clig" 1, "calt" 1;
      font-feature-settings: "kern" 1, "liga" 1, "clig" 1, "calt" 1;
      -webkit-font-kerning: normal;
      -moz-font-kerning: normal;
      font-kerning: normal;
      -webkit-font-variant-ligatures: common-ligatures contextual;
      font-variant-ligatures: common-ligatures contextual;
    }

    a {
      text-decoration: none;
    }

    h1:last-child,
    h1:only-child,
    h2:last-child,
    h2:only-child,
    h4:last-child,
    h4:only-child,
    h6:last-child,
    h6:only-child,
    p:last-child,
    p:only-child {
      margin-bottom: 0;
    }

    pre,
    pre[class*="language-"] {
      width: calc(100% + 8rem) !important;
      margin: 0 0 1rem -4em;
    }

    @media (max-width: 1085px) {
      pre,
      pre[class*="language-"] {
        width: calc(100% + 4rem) !important;
        margin: 0 0 1em -2em;
      }
    }

    pre code {
      font-size: 16px;
      line-height: 1.75;
      background: none;
      padding: 1.5rem;
      white-space: pre;
      -webkit-overflow-scrolling: touch;
      display: block;
      overflow-x: scroll;
    }

    blockquote {
      display: block;
      padding: 1.25em 0;
      margin-bottom: 1.5em;
      width: 100%;
    }

    blockquote,
    q {
      quotes: none;
    }

    blockquote:after,
    blockquote:before,
    q:after,
    q:before {
      content: "";
      content: none;
    }

    blockquote.left-pull {
      margin-left: -40%;
    }

    @media only screen and (max-width: 36em) {
      blockquote.left-pull {
        margin-left: 0;
      }
    }

    blockquote.right-pull {
      width: 130%;
      margin-left: 15%;
    }

    @media only screen and (max-width: 36em) {
      blockquote.right-pull {
        width: 100%;
        margin-left: 0;
      }
    }

    blockquote .video {
      margin-bottom: 1.5em;
    }

    blockquote p {
      font-family: NeueHaasBold, Helvetica, sans-serif;
      font-size: 2em;
      color: #ac2eff;
      line-height: 1.2;
    }

    blockquote p:first-of-type:before {
      content: "";
    }

    blockquote p:last-of-type:after {
      content: "";
    }

    blockquote span {
      display: block;
      text-align: right;
    }

    .quote-position,
    .quote-source {
      color: #000;
      opacity: 0.5;
    }

    .quote-source {
      font-family: NeueHaasBold, Helvetica, sans-serif;
      font-size: 1.5em;
      padding-bottom: 0.25em;
      margin-top: -1em;
    }

    .quote-source:before {
      content: "";
    }

    .quote-position {
      font-family: AndaleMono, monospace;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-right: -0.15em;
      font-size: 0.75em;
      font-weight: 700;
    }

    .quote-position + .quote-position {
      margin-top: 0.5em;
    }
  `}</style>
);
