const Layout = props => (
  <div>
    <div className="layoutWrapper">
      <div className="layoutInner">
        <main>{props.children}</main>
      </div>
    </div>
    <style jsx global>{`
      .layoutWrapper {
        align-items: stretch;
        display: flex;
        flex-direction: column;
        height: 100%;
        position: relative;
        overflow-scrolling: touch;
      }
      ,
      .layoutInner {
        flex: 1 1 auto;
      }

      section:first-of-type {
        margin-top: 5em;
      }

      section {
        margin-bottom: 1.5rem;
      }

      .heroSection {
        box-shadow: 0 1px 0 0 rgba(235, 237, 242, 0.6);
      }

      .gridHero {
        display: flex;
        flex-direction: column;
        height: calc(100% + 18rem);
        width: 100%;
        padding: 3em 1.5em;
        place-content: center;
        place-items: center;
      }

      .heroContent {
        width: 100%;
        max-width: 50em;
        margin: 0 0 1.5em 0;
        text-align: center;
      }

      @media screen and (min-width: 60em) {
        .gridHero {
          display: grid;
          grid-gap: 3.5rem;
          grid-template-columns: 1fr 1fr;
          place-items: center flex-end;
          width: calc(100vw - 25%);
          height: 50vh;
          margin: auto;
        }

        .heroContent {
          margin: 0;
          padding: 0 2rem 0 0;
          text-align: left;
        }
      }

      .grid {
        display: block;
        width: 100%;
        place-content: center;
        place-items: center;
        padding: 1em;
      }

      .gridTitle {
        grid-column: 1/5;
        width: 100%;
      }

      @media screen and (min-width: 60em) {
        .grid {
          width: 100%;
          display: grid;
          grid-auto-rows: auto;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 1.5em;
          padding: 0 1.5em;
        }
      }

      @media screen and (min-width: 120em) {
        .grid {
          width: 100%;
          display: grid;
          grid-auto-rows: auto;
          grid-template-columns: repeat(5, 1fr);
          grid-gap: 1.5em;
          padding: 0 1.5em;
        }

        .gridTitle {
          grid-column: 1/6;
          width: 100%;
        }
      }
    `}</style>
  </div>
);

export default Layout;
