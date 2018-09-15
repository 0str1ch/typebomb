import Link from "next/link";
import Layout from "../components/MyLayout";
import TerminalWindow from "../components/TerminalWindow";

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
      <TerminalWindow />
    </section>
  </Layout>
);
