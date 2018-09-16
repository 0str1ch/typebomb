const RobotoMonoRoboto = () => (
   <div>
    <span className="heading">The spectacle before us was indeed sublime.</span>
    <span className="body">
      Apparently we had reached a great height in the atmosphere, for the sky
      was a dead black, and the stars had ceased to twinkle.
    </span>
    <div className="fontInfo">
      <span>Heading: <a href="http://">Roboto Mono</a></span>
      <span>Body: <a href="http://">Roboto</a></span>
    </div>
    <style jsx>{`

      .heading {
        font-family: "Roboto Mono", monospace;
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


    `}</style>
  </div>
);

export default RobotoMonoRoboto;
