import { Link } from "@nextui-org/react";
import { ImgProp } from "./ImgProp";

export const KeyFeaturesEng = (props) => (
  <>
    <p className="detail-title">Key Features</p>
    <ImgProp />
    <div>
      <div className="detail-sub-section">
        <h2 className="detail-subtitle">1. Gather survey responses</h2>
        <li className="key-li">
          Gathered survey responses and stored the answers in PostgreSQL
          database.
        </li>
      </div>

      <div className="detail-sub-section">
        <h2 className="detail-subtitle">2. Present survey results</h2>
        <li className="key-li">
          Displayed survey results on distinct pages in both text and JSON
          formats by retrieving data from an SQL table.
        </li>
      </div>

      <div className="detail-sub-section">
        <h2 className="detail-subtitle">3. Web design and Frontend development</h2>
        <li className="key-li">
          Utilized CSS and{" "}
          <Link className="key-link" href="https://purecss.io/">
            Pure CSS
          </Link>
          {" "}to craft visually captivating web pages.
        </li>
      </div>
    </div>
  </>
);