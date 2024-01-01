import ImgSlider from "../ImgSlider";
import auth from "../../pics/yum-auth.png";
import search from "../../pics/yum-search.png";
import search2 from "../../pics/yum-search2.png";
import result from "../../pics/yum-searchResult.png";
import timeline from "../../pics/yum-main.png";
import review from "../../pics/yum-review.png";
import wishlist from "../../pics/yum-wishlist.png";
import manual from "../../pics/yum-manualForm.png";

let photos = [
  { title: "YumYumTok-login", url: auth },
  { title: "YumYumTok-search", url: search },
  { title: "YumYumTok-search2", url: search2 },
  { title: "YumYumTok-searchResult", url: result },
  { title: "YumYumTok-review", url: review },
  { title: "YumYumTok-manual", url: manual },
  { title: "YumYumTok-wishlist", url: wishlist },
  { title: "YumYumTok-timeline", url: timeline }
]

export const ImgProp = (props) => (
  <div className="key-img">
    <ImgSlider photos={photos}></ImgSlider>
  </div>
);
