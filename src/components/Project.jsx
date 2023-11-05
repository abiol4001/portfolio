import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Project = ({ project }) => {
  const ref = useRef();
  const {scrollYProgress} = useScroll({target: ref})

  const y = useTransform(scrollYProgress, [0,1], [-500, 500])
  return (
    <section className="h-[100vh] snap-center">
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center h-full px-4 lg:px-40">
        <div className="flex-1 w-full h-[50%] flex items-center justify-center" ref={ref}>
          <img
            src={project.img}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div className="flex-1 flex flex-col gap-3" style={{y}}>
          <p className="text-5xl font-bold">{project.title}</p>
          <p className="text-gray-300">{project.desc}</p>
          <button className="bg-white px-8 py-3 text-black rounded-2xl md:w-fit text-sm">
            See Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
