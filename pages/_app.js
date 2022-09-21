import { useEffect } from "react";
import "../styles/globals.css";
import AOS from "aos";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
          scale: 0,
        },
        pageAnimate: {
          scale: 1,
          opacity: 1,
          transition: 0.4,
          transitionDelay: 0.007,
        },
      }}
    >
      <Component {...pageProps} />;
    </motion.div>
  );
}

export default MyApp;
