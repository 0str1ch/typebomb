const UiButton = props => (
  <div>
    <div className="ui-Button">{props.children}</div>
    <style jsx>
      {`
      .ui-Button {
        position: relative;
        margin: 0 0.4rem 1rem 0;
        border-radius: 5px;
        padding: 0.666em 0.999em;
        background: var(--primary-light);
        color: var(--secondary);
        text-decoration: none;
        width: 100%;
        font-size: var(--text-small);
      }

      @media screen and (max-width: 36em) {
        .ui-Button {
          width: 100%;
          display: block;
        }
      }

      .ui-Button a {
        text-decoration: none;
      }
    `}
    </style>
  </div>
);

export default UiButton;
