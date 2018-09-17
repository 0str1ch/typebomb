const SectionTitle = props => (
  <div className="sectionTitle sectionTitle--sticky">
    {props.children}
    <style jsx global>{`
      .sectionTitle {
        grid-column-start: 1;
        grid-column-end: 4;
        display: flex;
        align-items: center;
        position: relative;
        padding: 1rem 0;
        box-shadow: 0px 1px 0 0 var(--shadow);
      }

      .sectionTitle h3 {
        margin: 0;
        font-weight: 700;
      }

      .sectionTitle small {
        font-size: 1rem;
        color: var(--secondary-text);
        margin-left: 1rem;
        font-weight: initial;
      }

      .sectionTitle:before {
        background-image: linear-gradient(80deg, #fc4a1a, #f7b733);
      }
      .sectionTitle:before {
        content: "";
        position: absolute;
        display: block;
        border-radius: 50%;
        width: 0.5em;
        height: 0.5em;
        margin-top: -1px;
        left: -1.25rem;
      }

      .sectionTitle--sticky {
        position: sticky;
        top: 0;
        background: var(--primary-light);
        transform: translateY(-1px);
        transform-origin: 0 -1px;
      }
    `}</style>
  </div>
);

export default SectionTitle;
