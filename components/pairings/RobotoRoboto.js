const RobotoRoboto = () => (
  <div className="fontPairContent">
    <span className="heading">The spectacle before us was indeed sublime.</span>
    <span className="body">
      Apparently we had reached a great height in the atmosphere, for the sky
      was a dead black, and the stars had ceased to twinkle.
    </span>
    <small className="headingFont">
      <span>Heading:</span> Roboto
    </small>
    <small className="bodyFont">
      <span>Body:</span> Roboto
    </small>
    <style jsx>{`
      .fontPairContent {
        display: flex;
        flex-direction: column;
        transition-duration: 350ms;
        -webkit-transition-property: opacity, transform;
        transition-property: opacity, transform;
        -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }

      .heading {
        font-family: "Roboto", sans-serif;
        font-size: 2em;
        font-weight: 700;
        line-height: 1.1;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
        line-height: 1.1;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

      .body {
        font-family: "Roboto", sans-serif;
        font-size: 1em;
        font-weight: normal;
        margin: 1.5rem 0;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
        line-height: 1.45;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }

      .bodyFont span,
      .headingFont span {
        font-weight: 700;
      }
    `}</style>
  </div>
);

export default RobotoRoboto;
