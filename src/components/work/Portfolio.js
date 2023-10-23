import React from "react";
import "./Work.css";
import Work from "./Work";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Recent Projects</h2>
      <span className="section__subtitle">My work...</span>

      <Work />
    </section>
  );
};

export default Portfolio;
