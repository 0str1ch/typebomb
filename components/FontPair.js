const FontPair = props => (
  <div className="fontPair">
    {props.children}
    <style jsx>{`
      .fontPair {
        padding: 2em;
        border: 1px solid red;
        display: flex;
        flex-direction: column;
      }

      @media screen and (min-width: 48em) {
        .fontPair {
          padding: 2em;
        }
      }
      }
    `}</style>
  </div>
);

export default FontPair;
