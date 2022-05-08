import { motion } from "framer-motion";

export const HomeImage = () => {
  const list = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        default: { duration: 1 },
      },
    },
  };
  const item1 = {
    visible: {
      opacity: 1,
      x: 200,
      y: 180,
      transition: {
        default: {
          duration: 2,
        },
      },
    },
    hidden: { opacity: 0, x: 0, y: -50 },
  };
  const item2 = {
    visible: {
      opacity: 1,
      x: -100,
      y: 400,
      transition: {
        default: {
          duration: 2,
        },
      },
    },
    hidden: { opacity: 0, x: 0, y: 0 },
  };
  const item3 = {
    visible: {
      opacity: 1,
      y: -100,
      x: 400,
      transition: {
        default: {
          duration: 2,
        },
      },
    },
    hidden: { opacity: 0, x: 0, y: 0 },
  };
  const item4 = {
    visible: {
      opacity: 1,
      x: 80,
      y: 120,
      transition: {
        default: {
          duration: 2,
        },
      },
    },
    hidden: { opacity: 0, x: 0, y: 0 },
  };
  return (
    <motion.div
      className="col-lg-6 d-none d-lg-block"
      variants={list}
      initial="hidden"
      animate="visible"
    >
      <div className="row g-0 d-flex">
        <motion.div
          className="img-1 img-side col-5 shadow-custom"
          variants={item1}
          whileHover={{ scale: 1.1 }}
        ></motion.div>

        <motion.div
          className="img-2 img-side  col-5 shadow-custom"
          variants={item2}
          whileHover={{ scale: 1.1 }}
        ></motion.div>

        <motion.div
          className="img-3 img-side  col-5 shadow-custom"
          variants={item3}
          whileHover={{ scale: 1.1 }}
        ></motion.div>

        <motion.div
          className="img-4 img-side col-5 shadow-custom"
          variants={item4}
          whileHover={{ scale: 1.1 }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export const HomeTitle = () => {
  const list = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        default: { duration: 1 },
      },
    },
  };
  const item1 = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        default: {
          duration: 2,
        },
      },
    },
    hidden: { opacity: 0, x: -100 },
  };
  const item2 = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        default: {
          duration: 2,
        },
      },
    },
    hidden: { opacity: 0, x: 100 },
  };
  return (
    <motion.div
      className="col-lg-6 col-12 text-white"
      variants={list}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="text-lg-end text-center title display-1"
        variants={item1}
      >
        Bienvenido
      </motion.div>
      <motion.div
        className="text-lg-end text-center  display-1"
        variants={item2}
      >
        a mi
      </motion.div>
      <motion.div
        className="text-lg-end text-center  display-1"
        variants={item1}
      >
        página
      </motion.div>
      <motion.div
        className="text-lg-end text-center  display-1"
        variants={item2}
      >
        Web
      </motion.div>
    </motion.div>
  );
};
