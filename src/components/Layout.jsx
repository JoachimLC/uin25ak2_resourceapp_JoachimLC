import React from "react";
import Nav from "./Nav";
import PageTitle from "./PageTitle";

export default function Layout({ children }) {
  return (
    <div>
      <main id="main">
        <PageTitle/>
        <Nav />
        <section id="tab-system-wrapper" className="tab-system-wrapper">
            {children}
        </section>
      </main>
    </div>
  );
}
