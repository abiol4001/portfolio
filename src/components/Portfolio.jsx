import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Project from "./Project";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Demo Project",
      img: "https://getbutterfly.com/wp-content/uploads/2016/04/logo-js.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam suscipit quae accusamus dolores repellat quis, quaerat non corrupti iusto eius consequatur explicabo quos modi beatae architecto adipisci maiores expedita, harum ex maxime deserunt ullam? Inventore porro quidem dolores.  ea fugiat quae officiis temporibus dolor ratione quisquam ab! Molestias",
    },
    {
      id: 2,
      title: "Demo Project2",
      img: "https://getbutterfly.com/wp-content/uploads/2016/04/logo-js.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam suscipit quae accusamus dolores repellat quis, quaerat non corrupti iusto eius consequatur explicabo quos modi beatae architecto adipisci maiores expedita, harum ex maxime deserunt ullam? Inventore porro quidem dolores.  ea fugiat quae officiis temporibus dolor ratione quisquam ab! Molestias",
    },
    {
      id: 3,
      title: "Demo Project3",
      img: "https://getbutterfly.com/wp-content/uploads/2016/04/logo-js.jpg",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam suscipit quae accusamus dolores repellat quis, quaerat non corrupti iusto eius consequatur explicabo quos modi beatae architecto adipisci maiores expedita, harum ex maxime deserunt ullam? Inventore porro quidem dolores.  ea fugiat quae officiis temporibus dolor ratione quisquam ab! Molestias",
    },
  ];

  const ref = useRef()

  const {scrollYProgress} = useScroll({target: ref, offset: ["end end", "start start"]})
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  })
  return (
    <div className="relative" ref={ref} id="Portfolio">
      <div className="sticky top-0 left-0 text-3xl lg:text-6xl text-center pt-[50px] font-bold">
        <h1>Features Works</h1>
        <motion.div
          style={{ scaleX }}
          className="h-2.5 bg-white mt-1"
        ></motion.div>
      </div>
      {projects.map((project) => (
        <Project project={project} key={project.id} />
      ))}
    </div>
  );
};

export default Portfolio;
