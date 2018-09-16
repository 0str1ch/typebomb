const FontPair = props => (
  <div className="fontPair">
    <div className="fontPairContent">{props.children}</div>
    <style jsx global>{`
      .fontPair {
        padding: 2em;
        display: flex;
        flex-direction: column;
        box-shadow: inset 0px 1px 0 0 var(--shadow);
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
        line-height: 1.1;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
        line-height: 1.1;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      .body {
        font-weight: normal;
        margin: 1.5rem 0;
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
