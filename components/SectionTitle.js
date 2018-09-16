const SectionTitle = props => (
  <div className="sectionTitle">
    {props.children}
    <style jsx global>{`
      .sectionTitle {
        grid-column-start: 1;
        grid-column-end: 4;
        display: flex;
        align-items: center;
        position: relative;
      }

      .sectionTitle h3 {
        margin: 0;
        font-weight: 700;
      }

      .sectionTitle small {
        font-size: 1rem;
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
    `}</style>
  </div>
);

export default SectionTitle;
