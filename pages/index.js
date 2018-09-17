import Link from "next/link";
import PageLayout from "../components/PageLayout";
import React from "react";
import FontPair from "../components/FontPair";
import RobotoRoboto from "../components/pairings/RobotoRoboto";
import RobotoMonoRoboto from "../components/pairings/RobotoMonoRoboto";
import FeaturedFont from "../components/FeaturedFont";
import TypeHero from "../components/TypeHero";
import UiButton from "../components/Ui-Button";
import SectionTitle from "../components/SectionTitle";

export default () => (
  <PageLayout>
    <TypeHero>
      <h1>Font pairings made easy.</h1>
      <p>
        Find font pairings, color sschemes, and the CSS you need to design
        beautiful type.
      </p>
      <Link href="/about">
        <a href="#" className="ui-Button">
          <UiButton>Learn More</UiButton>
        </a>
      </Link>
    </TypeHero>
    <FeaturedFont>
      <RobotoRoboto />
    </FeaturedFont>
    <SectionTitle>
      <h3>
        Sans-serif.
        <small>Minimalist, modern, and quite popular</small>
      </h3>
    </SectionTitle>
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
