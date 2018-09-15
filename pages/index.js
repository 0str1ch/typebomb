import Link from "next/link";
import Layout from "../components/MyLayout";
import React from "react";
import ProjectTile from "../components/ProjectTile";
import TerminalWindow from "../components/TerminalWindow";

export default () => (
  <Layout>
    <section className="heroSection">
      <div className="gridHero">
        <div className="heroContent">
          <h1>I defy convention in art and code.</h1>
          <p>
            I'm a designer, front-end fdeveloper, and typographer with a flair for minimalism. I work
            well office dogs and unlimited coffee. ☕️
          </p>
        </div>
        <TerminalWindow />
      </div>
    </section>
    <section className="">
      <div className="grid">
        <div className="gridTitle">
          <h2>Digital</h2>
          <p>A collection of my digital work.</p>
        </div>
        <Link href="/typing">
          <a>
            <ProjectTile key={1}>
              <div className="tileContent">
                <h4>FL hardcore legends</h4>
                <h3>Goat House Records</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
                  distinctio!
                </p>
              </div>
            </ProjectTile>
          </a>
        </Link>
        <Link href="/typing">
          <a>
            <ProjectTile key={2}>
              <div className="tileContent">
                <h4>DJ/Producer</h4>
                <h3>Nicky K</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
                  distinctio!
                </p>
              </div>
            </ProjectTile>
          </a>
        </Link>
        <Link href="/typing">
          <a>
            <ProjectTile key={3}>
              <div className="tileContent">
                <h4>cannabis journalist</h4>
                <h3>Dani Guercio</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
                  distinctio!
                </p>
              </div>
            </ProjectTile>
          </a>
        </Link>
        <Link href="/typing">
          <a>
            <ProjectTile key={4}>
              <div className="tileContent">
                <h4>Vegan hardcore</h4>
                <h3>Direct Action</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
                  distinctio!
                </p>
              </div>
            </ProjectTile>
          </a>
        </Link>
        <Link href="/typing">
          <a className="tileExtra tileLink">
            <ProjectTile key={5}>
              <div className="tileContent">
                <h4>FL hardcore legends</h4>
                <h3>UX/UI</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
                  distinctio!
                </p>
              </div>
            </ProjectTile>
          </a>
        </Link>
      </div>
    </section>
    <section className="">
      <div className="grid">
        <div className="gridTitle">
          <h2>Print</h2>
          <p>A collection of my digital works.</p>
        </div>
        <Link href="/typing">
          <a>
            <ProjectTile key={6}>
              <div className="tileContent">
                <h4>FL hardcore legends</h4>
                <h3>UX/UI</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
                  distinctio!
                </p>
              </div>
            </ProjectTile>
          </a>
        </Link>
        <Link href="/typing">
          <a>
            <ProjectTile key={7}>
              <div className="tileContent">
                <h4>FL hardcore legends</h4>
                <h3>UX/UI</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
                  distinctio!
                </p>
              </div>
            </ProjectTile>
          </a>
        </Link>
        <Link href="/typing">
          <a>
            <ProjectTile key={8}>
              <div className="tileContent">
                <h4>FL hardcore legends</h4>
                <h3>UX/UI</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
                  distinctio!
                </p>
              </div>
            </ProjectTile>
          </a>
        </Link>
        <Link href="/typing">
          <a>
            <ProjectTile key={9}>
              <div className="tileContent">
                <h4>FL hardcore legends</h4>
                <h3>UX/UI</h3>
                <p>
                  Lorem ipsum, olor sit amet consectetur adipisicing elit. Rem,
                  distinctio!
                </p>
              </div>
            </ProjectTile>
          </a>
        </Link>
        <Link href="/typing">
          <a className="tileExtra tileLink">
            <ProjectTile key={10}>
              <div className="tileContent">
                <h4>FL hardcore legends</h4>
                <h3>UX/UI</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
                  distinctio!
                </p>
              </div>
            </ProjectTile>
          </a>
        </Link>
      </div>
    </section>
  </Layout>
);
