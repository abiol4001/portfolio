import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-[50px] h-[50px] fixed top-[25px] left-[25px] cursor-pointer z-50 rounded-full flex items-center justify-center"
      >
        <svg width="23" height="23" viewBox="0 0 23 23" className="">
          <motion.path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
          />
          <motion.path
            variants={{ closed: { d: "M 2 9.5 L 20 9.5" }, open: {d: ""} }}
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
          />
          <motion.path
            variants={{ closed: { d: "M 2 16.5 L 20 16.5" }, open: {d: "M 3 2.5 L 17 16.5"} }}
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
          />
        </svg>
      </button>
      {/* <div>Button</div> */}
    </>
  );
};

export default ToggleButton;
