import {Navbar, Button, Link} from "@nextui-org/react";
import {MoonIcon} from "./Icon/MoonIcon";
import {SunIcon} from "./Icon/SunIcon";

function Nav({ darkMode, setDarkMode }){
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  return(
    <>
      <Navbar maxWidth={'full'}>
        <div className="nav-style">
          <Link href="/" color="foreground" className="nav-item">HOME</Link>
          <Link href="/about" color="foreground" className="nav-item">ABOUT</Link>
          <Link href="/projects" color="foreground" className="nav-item">PROJECTS</Link>
            
          {/* Dark mode switch */}
          <div>
            <Button 
              isIconOnly
              className="nav-icon"
              onClick={toggleDarkMode} 
              size="sm" 
              color={darkMode? ("warning"): ("secondary")}
              variant={darkMode? ("light"): ("flat")}
            >
              {darkMode? <SunIcon /> : <MoonIcon />}
            </Button>
          </div>
        </div>
      </Navbar>
    </>
  )
}

export default Nav;