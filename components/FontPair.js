const FontPair = props => (
  <div className="fontPair">
    {props.children}
    <style jsx>{`
      .fontPair {
        padding: 2em;
        display: flex;
        flex-direction: column;
        box-shadow: inset 0px 1px 0 0 var(--shadow);
      }

      .fontPair:first-of-type {
        box-shadow: none;
        background: var(--secondary);
        color: #fff;
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
    `}</style>
  </div>
);

export default FontPair;
