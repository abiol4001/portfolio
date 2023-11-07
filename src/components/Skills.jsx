import React from 'react'
import { skillsData } from '../lib/data';
import { motion } from 'framer-motion';

const Skills = () => {

    const variants = {
        initial: {
            y: 100,
            opacity: 0
        },
        animate: (index) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.05 * index
            }
        })
    }
  return (
    <div className="pt-[50px] h-full lg:w-[80%] mx-auto">
      <h1 className=" text-3xl lg:text-6xl text-center mb-[20px] font-bold">
        My skills
      </h1>
      <ul className="flex flex-wrap items-center justify-center h-full lg:h-[80vh] gap-x-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 h-fit w-fit"
            key={index}
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={
              {
                //   once: true,
              }
            }
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default Skills