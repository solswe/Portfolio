import ImgSlider from "../ImgSlider";
import main from "../../pics/wuw-main.png";
import survey1 from "../../pics/wuw-survey1.png";
import survey2 from "../../pics/wuw-survey2.png";
import thanks from "../../pics/wuw-thanks.png";
import textResponse from "../../pics/wuw-textResponse.png";
import json from "../../pics/wuw-json.png";

let photos = [
  { title: "WUW-main", url: main },
  { title: "WUW-survey1", url: survey1 },
  { title: "WUW-survey2", url: survey2 },
  { title: "WUW-thanks", url: thanks },
  { title: "WUW-text", url: textResponse },
  { title: "WUW-json", url: json },
]

export const ImgProp = (props) => (
  <div className="key-img">
    <ImgSlider photos={photos}></ImgSlider>
  </div>
);
