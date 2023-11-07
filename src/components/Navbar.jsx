import { motion } from 'framer-motion';
import React from 'react'
import Sidebar from './Sidebar';
import { ArrowDownToLine, Download, DownloadIcon, Github, Linkedin, LucideDownload } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="h-[100px] flex justify-between z-[10]">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex justify-between items-center min-w-[80vw] max-w-[1366px] h-full m-auto">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="font-bold hidden md:block flex-shrink-0"
        >
          Abdullah Oyewale
        </motion.span>

        <div className="flex gap-2 md:gap-4 justify-end w-full">
          <a
            href="https://www.linkedin.com/in/abdullah-oyewale/"
            className="h-8 w-8 rounded-full bg-white flex justify-center items-center hover:animate-bounce hover:opacity-80 group"
          >
            <Linkedin className="h-[18px] w-[18px] text-black group-hover:text-blue-600" />
          </a>
          <a
            href="https://github.com/abiol4001"
            className="h-8 w-8 rounded-full bg-white flex justify-center items-center hover:animate-bounce hover:opacity-80 group"
          >
            <Github className="h-[18px] w-[18px] text-black " />
          </a>
          <a
            className="rounded-full bg-white flex justify-center items-center text-gray-600 hover:opacity-80 group px-3 text-sm"
            href="/abdullah-oyewale.pdf"
            download
          >
            Download CV
            <ArrowDownToLine size={18} className='group-hover:animate-bounce' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar