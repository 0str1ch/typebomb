function PageLayout({ children }) {
  return (
    <main className="layoutWrapper">
      <div className="layoutInner">{children}</div>
      <style jsx global>
        {`
          .layoutWrapper {
            align-items: stretch;
            display: flex;
            flex-direction: column;
            height: 100%;
            position: relative;
            margin-left: 6vw;
            overflow-scrolling: touch;
          }

          .layoutInner {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: auto;
            grid-gap: 2em;
            padding: 2em;
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
        `}
      </style>
    </main>
  );
}

export default PageLayout;
