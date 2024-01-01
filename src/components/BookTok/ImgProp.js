import ImgSlider from "../ImgSlider";
import main from "../../pics/book-main.png";
import info from "../../pics/book-bookInfo.png";
import bookshelf from "../../pics/book-bookshelf.png";
import search from "../../pics/book-search.png";

let photos = [
  { title: "BookTok-main", url: main },
  { title: "BookTok-search", url: search },
  { title: "BookTok-info", url: info },
  { title: "BookTok-bookshelf", url: bookshelf },
]

export const ImgProp = (props) => (
  <div className="key-img">
    <ImgSlider photos={photos}></ImgSlider>
  </div>
);
