const RobotoMonoRoboto = () => (
   <div>
    <span className="heading">
      <h3>The spectacle before us was indeed sublime.</h3>
    </span>
    <span className="body">
      <p>
        Apparently we had reached a great height in the atmosphere, for the sky
        was a dead black, and the stars had ceased to twinkle.
      </p>
    </span>
    <div className="fontInfo">
      <span>
        Heading: <a href="http://">Roboto Monospace</a>
      </span>
      <span>
        Body: <a href="http://">Roboto</a>
      </span>
    </div>
    <style jsx>{`
      .heading {
        font-family: "Roboto Mono", monospace;
      }

      .body {
        font-family: "Roboto", sans-serif;
      }
    `}</style>
  </div>
);

export default RobotoMonoRoboto;
