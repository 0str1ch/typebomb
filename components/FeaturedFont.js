const FeaturedFont = props => (
  <div className="fontPair fontPair--featured">
    <div className="fontPairContent">{props.children}</div>
    <style jsx global>{`

      .fontPair--featured:first-of-type {
        box-shadow: none;
        background: var(--secondary);
        color: #fff;
      }

      .fontPair--featured .fontInfo span {
        color: var(--hint-light);
      }

            .fontPair--featured .fontInfo a {
        color: var(--hint-light);
      }

    `}</style>
  </div>
);

export default FeaturedFont;
