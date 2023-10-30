import React, { useState } from "react";
import { motion } from "framer-motion";

import ToggleButton from "./ToggleButton";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
        staggerChildren: 0.1,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const linkVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="flex flex-col items-center justify-center bg-white text-black"
    >
      <motion.div
        className="fixed top-0 left-0 bottom-0 w-[400px] h-full flex flex-col gap-5 items-center justify-center bg-white"
        variants={variants}
      >
        {links.map((link) => (
          <motion.a href={`#${link}`} key={link} onClick={()=> setOpen(false)} className="text-3xl" variants={linkVariants} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
            {link}
          </motion.a>
        ))}
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
