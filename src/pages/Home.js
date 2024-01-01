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
                href="https://drive.google.com/file/d/1E-Pojv7I0Np2mzrFG50S51cO58YZr5hH/view?usp=drive_link"
                color="secondary"
              >
                Resume
              </Link>
              &nbsp;&nbsp;
              <Link 
                isExternal
                showAnchorIcon
                href="http://www.linkedin.com/in/solkims"
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
