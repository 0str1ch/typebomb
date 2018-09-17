const FeaturedFont = props => (
  <div className="fontPair fontPair--featured">
    <div className="fontPairContent">{props.children}</div>
    <style jsx global>
      {`
      .fontPair--featured {
        box-shadow: none;
        background: var(--secondary);
      }

      .fontPair--featured h3 {
        color: var(--light-text);
      }

      .fontPair--featured p {
        color: var(--light-text);
      }

      .fontPair--featured .fontInfo span {
        color: var(--hint-light);
      }

      .fontPair--featured .fontInfo a {
        color: var(--hint-light);
      }
    `}

    </style>
  </div>
)

export default FeaturedFont
