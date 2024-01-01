import { Link } from "@nextui-org/react";
import { ImgProp } from "./ImgProp";

export const KeyFeaturesEng = (props) => (
  <>
    <p className="detail-title">Key Features</p>
    <ImgProp />
    <div>
      <div className="detail-sub-section">
        <h2 className="detail-subtitle">1. Bilingual website</h2>
        <li className="key-li">
          Wrote the site's content in both English and Korean to enable
          more people to access information and enjoy my website.
        </li>
      </div>

      <div className="detail-sub-section">
        <h2 className="detail-subtitle">2. Design and UI/UX</h2>
        <li className="key-li">
          Utilized CSS to create a website with responsive design and
          improved readability.
        </li>
        <li className="key-li">
          Implemented fun effects like dark mode and motion using{" "}
          <Link className="key-link" href="https://nextui.org/">
            Next UI
          </Link>
          {" "}and{" "}
          <Link className="key-link" href="https://www.framer.com/motion/">
            Framer
          </Link>.
        </li>
      </div>
    </div>
  </>
);