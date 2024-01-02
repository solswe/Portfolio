import '../styles.css';
import {Link} from "@nextui-org/react";
import { motion, useTime, useTransform } from "framer-motion";

function Home(){

  return(
    <>
      <div className="home-cont">
        <motion.div     
          animate={{ y: 80 }}
          transition={{ type: "spring", stiffness: 80, damping: 4 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="home-greeting">
            <p>
              Hello! I'm Sol,<br /> a web developer
            </p>
          </div>
        </motion.div>

        <div className="home-description">
          <p>
            I am passionate about creating interactive online worlds with
            cutting-edge technologies. My commitment lies in transforming
            concepts into seamlessly functional, responsive, and dynamic
            websites.
          </p>
          <div className="home-link">
            <div>
              <Link 
                isExternal
                showAnchorIcon 
                href="https://drive.google.com/file/d/1FO1-XhN5xTMtjiiGdrRnXaaHWPaMq74s/view?usp=sharing"
                color="secondary"
              >
                Resume
              </Link>
              &nbsp;&nbsp;
              <Link 
                isExternal
                showAnchorIcon
                href="https://drive.google.com/file/d/1WKCCVrLw2OZEMu-fsUXnGPWXJzUUET-L/view?usp=sharing"
                color="secondary"
              >
                이력서
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
