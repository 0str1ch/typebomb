const ProjectTile = props => (
  <div>
    <div className="tile">{props.children}</div>
    <style jsx global>{`
      .tile {
        border-radius: 5px;
        background: url(../static/da-band.jpg) center center;
        background-size: cover;
        background-repeat: no-repeat;
        min-height: 25em;
        width: 100%;
        display: flex;
        padding: 2em 1.5em;
        margin: 1em 0;
        flex-direction: column;
        position: relative;
        transition: transform 0.4s ease, box-shadow 0s ease,
          z-index 0.4s linear 0.2s;
        transition-delay: 0.2s;
        backface-visibility: hidden;
        transition-delay: 0.2s;
        place-content: flex-start;
        overflow: hidden;
        will-change: box-shadow;
      }

      @media screen and (min-width: 60em) {
        .tile {
          margin: 0;
        }
      }

      .tileExtra {
        display: none;
      }

      .tileExtra .tile {
        margin-top: 0;
      }

      @media screen and (min-width: 120em) {
        .tileExtra {
          display: flex;
        }
      }

      @media screen and (max-width: 36em) {
        .tileExtra {
          display: flex;
          width: 100%;
        }
      }

      .tile:hover {
        transform: translateZ(0);
      }

      .tile:hover .tileContent p {
        visibility: visible;
        opacity: 1;
      }

      .tile:hover .tileContent {
        transform: translateZ(0);
        transform: translateY(-4em);
      }

      .tile:hover:before {
        opacity: 1;
      }

      .tile:hover .tileContent svg {
        display: inline-flex;
        opacity: initial;
        transform: translate3d(50px, 0, 0px);
      }

      .tileContent {
        transition: transform 0.3s ease;
        transition-delay: 0.3s;
        display: flex;
        flex-direction: column;
        z-index: 10;
        cursor: auto;
        position: relative;
        transform: translateZ(0);
        bottom: -12em;
        will-change: transform, scale, opacity, visibility, z-index;
      }

      .tileContent svg {
        display: inline-flex;
        fill: var(--primary-light);
        height: 1em;
        width: 1em;
        transition: transform 0.2s ease, opacity 0.2s ease;
        transition-delay: 0.7s;
        opacity: 0;
        z-index: 2;
        vertical-align: middle;
        position: relative;
        top: -1px;
        will-change: transform, opacity;
      }

      .tile h3 {
        color: var(--primary-light);
        display: -webkit-box;
        box-orient: vertical;
        line-clamp: 2;
        overflow: hidden;
        line-height: 1.15em;
        max-height: 2.3em;
        margin: 0;
        will-change: transform;
        font-stretch: normal;
        -webkit-font-smoothing: antialiased;
      }

      .tile h4 {
        font-weight: 500;
        font-stretch: normal;
        font-size: var(--text-small);
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #fff;
        will-change: transform;
        font-stretch: normal;
        -webkit-font-smoothing: antialiased;
      }

      .tile p {
        color: #fff;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        line-height: 1.5em;
        max-height: 4.5em;
        margin-bottom: 0;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0s;
        transition-delay: 0.6s;
        will-change: opacity, transform, visibility;
        font-stretch: normal;
        -webkit-font-smoothing: antialiased;
      }

      .tileLink {
        z-index: 1;
        transition: transform 0.4s ease, box-shadow 0s ease,
          z-index 0.4s linear 0.2s;
        will-change: opacity, transform, box-shadow;
      }

      .tile:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top right,#833ab4,#fd1d1d,#fcb045);
        opacity: 0.6;
        border-radius: 9px;
        overflow: hidden;
        backface-visibility: hidden;
        z-index: 1;
        transform: translateZ(0);
        transition: opacity 0.2s linear;
        transition-delay: 0s;
        will-change: opacity, transform;
      }

      @media screen and (min-width: 48em) {
        .tile {
        }
      }
    `}</style>
  </div>
);

export default ProjectTile;
