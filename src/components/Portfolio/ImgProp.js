import ImgSlider from "../ImgSlider";
import main from "../../pics/port-main.png";
import projects from "../../pics/port-projects.png";
import about from "../../pics/port-about.png";
import projectEng from "../../pics/port-projectEng.png";
import projectKor from "../../pics/port-projectKor.png";

let photos = [
  { title: "Portfolio-main", url: main },
  { title: "Portfolio-about", url: about},
  { title: "Portfolio-projects", url: projects},
  { title: "Portfolio-projectEng", url: projectEng},
  { title: "Portfolio-projectKor", url: projectKor},
]

export const ImgProp = (props) => (
  <div className="key-img">
    <ImgSlider photos={photos}></ImgSlider>
  </div>
);
