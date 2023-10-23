import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <img className="project__img" src={item.image} alt="" />
      <h3 className="project__title">{item.title}</h3>
      <a href="#" className="project__button">
        Demo
      </a>
    </div>
  );
};

export default WorkItems;
