import App, { Container } from "next/app";
import React from "react";
import Header from "../components/Header";
import MobileNav from "../components/MobileNav";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Header />
        <MobileNav/>

        <Component {...pageProps} />

        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
            transform: translate3d(0, 0, 0);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity 250ms ease-in, transform 250ms ease-in;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 250ms ease-out;
          }
        `}</style>
      </Container>
    );
  }
}
