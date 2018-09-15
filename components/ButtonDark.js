const ButtonDark = props => (
  <div className="ButtonDark">
    {props.children}

    <style jsx>{`
      .ButtonDark {
        position: relative;
        margin: 0 0.4rem 1rem 0;
        border: 1px solid #000;
        border-radius: 5px;
        padding: 0.666em 0.999em;
        background: #000;
        color: #fff;
        text-decoration: none;
      }

      @media screen and (max-width: 36em) {
      .ButtonDark {
        width: 100%;
        display: block;
      }
    }

      a {
          text-decoration: none;
      }
    `}</style>
  </div>
);

export default ButtonDark;
