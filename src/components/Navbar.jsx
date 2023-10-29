import { motion } from 'framer-motion';
import React from 'react'
import Sidebar from './Sidebar';

const Navbar = () => {
  return (
    <div className="h-[100px]  flex justify-between">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex justify-between items-center min-w-[80vw] max-w-[1366px] h-full m-auto">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3}}
          className="font-bold"
        >
          Abdullah Oyewale
        </motion.span>

        <div className="flex gap-5">
          <a href="#">
            <img src="/" alt="" className="h-[18px] w-[18px]" />
          </a>
          <a href="#">
            <img src="/" alt="" className="h-[18px] w-[18px]" />
          </a>
          <a href="#">
            <img src="/" alt="" className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar