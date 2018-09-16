import Link from "next/link";
import PageLayout from "../components/PageLayout";
import React from "react";
import FontPair from "../components/FontPair";
import RobotoRoboto from "../components/pairings/RobotoRoboto";
import RobotoMonoRoboto from "../components/pairings/RobotoMonoRoboto";
import FeaturedFont from "../components/FeaturedFont";
import TypeHero from "../components/TypeHero";

export default () => (
  <PageLayout>
    <TypeHero>
      <h1>Font pairings made easy.</h1>
      <p>
        Find font pairings, color schemes, and the CSS you need to design
        beautiful websites and print projects.
      </p>
    </TypeHero>

    <FeaturedFont>
      <RobotoRoboto />
    </FeaturedFont>
    <FontPair>
      <RobotoMonoRoboto />
    </FontPair>
    <FontPair>
      <RobotoRoboto />
    </FontPair>
    <FontPair>
      <RobotoRoboto />
    </FontPair>
    <FontPair>
      <RobotoRoboto />
    </FontPair>
    <FontPair>
      <RobotoRoboto />
    </FontPair>
    <FontPair>
      <RobotoRoboto />
    </FontPair>
    <FontPair>
      <RobotoRoboto />
    </FontPair>
    <FontPair>
      <RobotoRoboto />
    </FontPair>
    <FontPair>
      <RobotoRoboto />
    </FontPair>
    <FontPair>
      <RobotoRoboto />
    </FontPair>
    <FontPair>
      <RobotoRoboto />
    </FontPair>
  </PageLayout>
);
