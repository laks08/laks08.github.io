import React from "react";
import Navigation from "./Navigation";
import "./Layout.css";

export default function Layout(props) {
  return (
    <div className="main">
      <Navigation />
      <main className="window">{props.children}</main>
    </div>
  );
}
