const RowNormal = props => (
  <div>
    <div className="padded">{props.children}</div>
    <style jsx>{`
      .padded {
        padding: 2em;
      }

      @media screen and (min-width: 48em) {
        .padded {
          padding: 3em;
        }
      }
    `}</style>
  </div>
);

export default RowNormal
