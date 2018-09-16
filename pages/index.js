import Link from "next/link";
import PageLayout from "../components/PageLayout";
import React from "react";
import FontPair from "../components/FontPair";

export default () => (
  <PageLayout>
    <section className="intro">
      <div className="introContent">
        <h1>Font pairings made easy.</h1>
        <p>
          Find font pairings, color schemes, and the CSS you need to design
          beautiful websites and print projects.
        </p>
      </div>
    </section>
    <FontPair />
    <FontPair />
    <FontPair />
    <FontPair />
    <FontPair />
    <FontPair />
    <FontPair />
    <FontPair />
    <FontPair />
    <FontPair />
  </PageLayout>
);
