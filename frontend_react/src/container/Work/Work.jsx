import React from "react";
import "./Work.scss";
import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const Work = () => {
  const handleWorkFilter = (item) => {};
  const [activeFilter, setActiveFilter] = useState('All')
  return (
    <>
      <h2 className="head-text">
        My creative <span> Portfolio </span>
        Section
      </h2>
      <div className="app__work_filter">
        {["UI/UX", "Web App", "ReactJs", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default Work;
