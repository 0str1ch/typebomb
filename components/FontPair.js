const FontPair = props => (
  <div className="fontPair">
    <div className="fontPairContent">{props.children}</div>
    <style jsx global>{`
      .fontPair {
        padding: 2em;
        display: flex;
        flex-direction: column;
        box-shadow: 0px 1px 0 0 var(--shadow);
      }

      .fontPairContent {
        display: flex;
        flex-direction: column;
        transition-duration: 350ms;
        -webkit-transition-property: opacity, transform;
        transition-property: opacity, transform;
        -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }

      .fontPair:first-of-type {
        box-shadow: none;
        background: var(--secondary);
        color: #fff;
      }

      .fontInfo {
        display: flex;
        flex-direction: column;
      }

      .fontInfo span {
        font-weight: 700;
        color: var(--hint);
        font-size: var(--text-small);
      }

      .fontInfo a,
      .fontInfo a:link {
        color: black;
        text-decoration: none;
        background-position-y: -0%;
        background-image: linear-gradient(transparent 50%,gold 50%);
        transition: background 500ms ease;
        background-size: 2px;
        background-size: auto 175%;
      }

      .fontInfo a:hover {
        background-position-y: 100%;
      }

      .fontPair:first-of-type:after {
        content: "Featured Pair";
        text-align: right;
        font-weight: 700;
        font-family: inherit;
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        font-size: 1em;
      }

      @media screen and (min-width: 48em) {
        .fontPair {
          padding: 2em;
        }
      }

      .heading {
        font-weight: 700;
        line-height: 1.2;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      .heading h3 {
        margin: 0;
      }

      .body {
        font-weight: normal;
        margin: 0.5rem 0 2rem 0;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
        line-height: 1.45;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }
    `}</style>
  </div>
);

export default FontPair;
