import Link from "next/link";
import Layout from "../components/MyLayout";
import TerminalWindow from "../components/TerminalWindow";
import React from "react";
import MyLogo from "../components/MyLogo";

export default () => (
  <Layout>
    <section
      className="vhfix"
      style={{
        height: "100vh",
        minHeight: "100vh",
        maxHeight: "100vh",
        placeContent: "center",
        placeItems: "center",
        display: "flex"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div>
          <MyLogo />
        </div>
        <h2>About Me</h2>
        <p>Designer. Producer. Typography geek. Full Stack developer.</p>
      </div>
    </section>
  </Layout>
);
