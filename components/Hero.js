const Hero = props => (
  <header className="hero">
    {props.children}
    <style jsx>{`

        .hero {
            height: 100vh;
            min-height: 100vh;
            max-height: 100vh;
            place-content: center;
            place-items: center;
            display: flex;
            padding: 2em;
        }

        @media screen and (min-width: 50em) {
      .hero {
        padding: 3em;
      }
    }

        `}</style>
  </header>
);

export default Hero;
