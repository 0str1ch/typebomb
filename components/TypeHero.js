const TypeHero = props => (
  <section className="intro">
    <div className="introContent">{props.children}</div>
    <style jsx global>
      {`
        .intro {
          grid-column-start: 1;
          grid-column-end: 3;
          padding: 2rem;
          height: 100%;
          background: var(--primary);
        }

        .introContent {
          text-align: center;
          display: flex;
          height: 100%;
          width: 36vw;
          margin: auto;
          place-content: center;
          place-items: center;
          flex-direction: column;
        }

        .introContent h1,
        .introContent p {
          color: #fff;
        }
      `}
    </style>
  </section>
);

export default TypeHero;
