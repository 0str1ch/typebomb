const RobotoMonoRoboto = () => (
  <div className="fontPairContent">
    <span className="heading">The spectacle before us was indeed sublime.</span>
    <span className="body">
      Apparently we had reached a great height in the atmosphere, for the sky
      was a dead black, and the stars had ceased to twinkle.
    </span>
    <style jsx>{`
      .fontPairContent {
        display: flex;
        flex-direction: column;
      }

      .heading {
        font-family: "Roboto Mono", monospace;
        font-size: 2em;
        font-weight: 700;
        line-height: 1.1;
      }

      .body {
        font-family: "Roboto", sans-serif;
        font-size: 1em;
        font-weight: normal;
        margin: 1.5rem 0;
      }
    `}</style>
  </div>
);

export default RobotoMonoRoboto;
