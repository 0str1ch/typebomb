import Head from "next/head";
import Typography from "../components/Typography";

export default () => (
  <div>
    <Head>
      <meta charSet="UTF-8" />
      <link rel="canonical" href="https://jeremymade.com" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="jsmith" />
      <meta name="apple-mobile-web-app-title" content="jsmith" />
      <meta name="theme-color" content="#2a2a2a" />
      <meta name="msapplication-navbutton-color" content="#2a2a2a" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="msapplication-starturl" content="/" />
      <title>Jeremy Smith</title>
      <meta
        name="description"
        content="Your friendly neighborhood web designer."
      />
      <meta property="og:title" content="Jeremy Smith" />
      <meta
        property="og:description"
        content="Your friendly neighborhood web designer."
      />
      <meta
        property="og:image:secure_url"
        content="https://richpreview.com/richpreview.png"
      />
      <link href="../static/js.ico" rel="shortcut icon" type="image/x-icon" />

      <link
        href="https://fonts.googleapis.com/css?family=Biryani:700|IBM+Plex+Sans:400,700|Lato|Merriweather|Noto+Sans+JP:900|Noto+Serif+JP|Open+Sans|Roboto:400,700|Rubik+Mono+One|Tajawal:700|Work+Sans"
        rel="stylesheet"
      />
    <Typography />

    <style jsx global>{`
      body {
        margin: 0;
      }

      html {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI,
          Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -moz-text-size-adjust: 100%;
        text-size-adjust: 100%;
        background: #fff;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        height: 100%;
        width: 100%;
      }

      /*
* === Resets & Fixes ===
*/
      html {
        -ms-overflow-style: -ms-autohiding-scrollbar !important;
        /* MS Edge and IE scrollbar hide */
      }

      *,
      *::before,
      *::after {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-font-kerning: auto;
        font-kerning: auto;
        word-wrap: break-word;
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      body {
        height: 100%;
        width: 100%;
        position: relative;
        overflow-x: hidden;
      }

      * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }

      :after,
      :before {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }

      ::-moz-selection {
        background: var(--primary);
        color: var(--primary-light);
      }

      ::selection {
        background: var(--primary);
        color: var(--primary-light);
      }

      button:focus,
      select:focus {
        outline: none;
      }

      a,
      abbr,
      acronym,
      address,
      applet,
      article,
      aside,
      audio,
      b,
      big,
      blockquote,
      body,
      canvas,
      caption,
      center,
      cite,
      code,
      dd,
      del,
      details,
      dfn,
      div,
      dl,
      dt,
      em,
      embed,
      fieldset,
      figcaption,
      figure,
      footer,
      form,
      header,
      hgroup,
      html,
      i,
      iframe,
      img,
      ins,
      kbd,
      label,
      legend,
      li,
      mark,
      menu,
      nav,
      object,
      ol,
      output,
      q,
      ruby,
      s,
      samp,
      section,
      small,
      span,
      strike,
      strong,
      sub,
      summary,
      sup,
      table,
      tbody,
      td,
      tfoot,
      th,
      thead,
      time,
      tr,
      tt,
      u,
      ul,
      var,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
      }

      p {
        margin-left: 0;
        margin-right: 0;
        margin-top: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
      }

      ol,
      ul {
        list-style: none;
      }

      * + address,
      * + dl,
      * + fieldset,
      * + figure,
      * + pre {
        margin-top: 0;
      }

      body,
      html {
        margin: 0;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      svg:not(:root) {
        overflow: hidden;
      }

      svg {
        vertical-align: middle;
      }

      video {
        height: auto;
        width: 100%;
      }

      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      main,
      nav,
      section,
      summary {
        display: block;
      }

      .Cursor--blinking {
        animation-name: blinker;
        animation-duration: 0.7s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        @keyframes blinker {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      }

      .terminalWrapper {
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
          serif;
        font-size: 12px;
        display: block;
        border-radius: 6px;
        background-color: #000;
        box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.3);
        clear: both;
        overflow: hidden;
        transform: translate3d(0);
        -webkit-transition: all 0.5s ease-out;
        -moz-transition: all 0.5s ease-out;
        -ms-transition: all 0.5s ease-out;
        -o-transition: all 0.5s ease-out;
        transition: all 0.5s ease-out;
        width: 90%;
        max-width: 50em;
        height: 18rem;
        border: 1px solid #333;
      }

      .terminalBar {
        height: 3em;
        font-size: var(--text-small), 0.75em;
        color: var(--secondary-light);
        text-align: center;
        background-color: #000;
        position: relative;
        display: grid;
        grid-template-columns: auto auto;
        place-content: center center;
        place-items: center center;
      }

      .terminalControls {
        display: flex;
        height: 1em;
      }

      .terminalIcon {
        border-radius: 50%;
        display: flex;
        width: 1em;
        height: 1em;
        position: absolute;
      }

      .terminalTitle {
        position: absolute;
      }

      .close {
        background-color: #ff5f56;
        left: 13px;
      }

      .minimize {
        background-color: #ffbd2e;
        left: 33px;
      }

      .fullscreen {
        background-color: #27c93f;
        left: 53px;
      }

      .terminalBody {
        padding: 0.5em 1em;
        min-height: 100%;
        overflow-y: auto;
        word-break: normal;
        background-color: #000;
        color: #fff;
        width: 100%;
      }

      .terminalBody p,
      .terminalBody span {
        color: #fff;
      }

      .terminalBody .command::before {
        content: "~$";
        display: inline-block;
        margin-right: 0.875em;
        color: limegreen;
      }

      .terminalBody .commandcd::before {
        content: "~$/js-next";
        display: inline-block;
        margin-right: 0.875em;
        color: limegreen;
      }
    `}</style>
  </Head>
  </div>
);
