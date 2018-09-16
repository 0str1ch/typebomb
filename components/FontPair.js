const FontPair = props => (
  <div className="fontPair">
  <span className="heading">
        The spectacle before us was indeed sublime.
      </span>
      <span className="body">
        Apparently we had reached a great height in the atmosphere, for the sky
        was a dead black, and the stars had ceased to twinkle.
      </span>
    {props.children}
    <style jsx global>{`
      .fontPair {
        padding: 2em;
        border: 1px solid red;
        display: flex;
        flex-direction: column;
      }

      @media screen and (min-width: 48em) {
        .fontPair {
          padding: 3em;
        }
      }

      .heading {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.9rem;
      }

      .body {
          font-size: 1rem;
          font-weight: normal;
          margin: 1.5rem 0;
      }
    `}</style>
  </div>
);

export default FontPair;
