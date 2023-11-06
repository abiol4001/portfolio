import {motion} from 'framer-motion'

const Hero = () => {
    const textVariants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        }
    }
    const sliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: "-100%",
            transition: {
                duration: 10,
                repeatType: "mirror",
                repeat: Infinity
            }
        }
    }
  return (
    <div className="h-[calc(100vh-100px)] w-full relative overflow-hidden flex flex-col z-[1]">
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="h-full w-[80%] mx-auto flex flex-col justify-center gap-10"
      >
        <h2 className="font-bold text-2xl uppercase text-purple-400">
          Abdullah Oyewale
        </h2>
        <h1 className="text-7xl font-bold">Web Developer</h1>
        <motion.div
          variants={textVariants}
          //   initial="initial"
          //   animate="animate"
          className="text-sm"
        >
          <button className="bg-transparent rounded-lg border-white border py-3 px-3 mr-4">
            See the latest works
          </button>
          <button className="rounded-lg bg-white text-black border py-3 px-3">
            <a href="#Contact">Let's work</a>
          </button>
        </motion.div>
      </motion.div>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="absolute text-[50vh] w-fit whitespace-nowrap -bottom-28 font-bold opacity-10 -z-10"
      >
        Writer content creator influencer
      </motion.div>
      <div className="absolute top-0 right-0 w-fit h-full">
        <img src="" alt="" className="w-full h-full" />
      </div>
    </div>
  );
}

export default Hero