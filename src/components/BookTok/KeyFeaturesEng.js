import { Link} from "@nextui-org/react";
import { ImgProp } from "./ImgProp";

export const KeyFeaturesEng = (props) => (
  <>
    <p className="detail-title">Key Features</p>
    <ImgProp />
    <div>
      <div className="detail-sub-section">
        <h2 className="detail-subtitle">1. Book lists</h2>
        <li className="key-li">
          Visitors can explore featured lists and discover bestselling
          books on the main page.
        </li>
        <li className="key-li">
          Featured lists are curated based on genres, utilizing data from{" "}
          <Link className="key-link" href="https://developers.google.com/books">
            Google Books Api
          </Link>.
        </li>
        <li className="key-li">
          To ensure credible and up-to-date information, data from{" "}
          <Link className="key-link" href="https://developer.nytimes.com">
            The New York Times Api
          </Link>
          {" "}is used for the weekly bestsellers.
        </li>
      </div>
      
      <div className="detail-sub-section">
        <h2 className="detail-subtitle">2. Book information</h2>
        <li className="key-li">
          Users can explore books by searching titles, authors, and ISBNs.
        </li>
        <li className="key-li">
          <Link className="key-link" href="https://developers.google.com/books">
            Google Books Api
          </Link>
          {" "}is used for comprehensive and precise search results.
        </li>
        <li className="key-li">
          Users can share their thoughts on books with the community by
          leaving comments.
        </li>
      </div>
      
      <div className="detail-sub-section">
        <h2 className="detail-subtitle">3. Bookshelf</h2>
        <li className="key-li">
          Users can log in to shelve(save) books on their bookshelf and manage them.
        </li>
        <li className="key-li">
          Bookshelves can be shared with others by searching for the
          bookshelf's name.
        </li>
        <li className="key-li">
          User authentication and management are facilitated through{" "}
          <Link className="key-link" href="https://auth0.com/">Auth0</Link>.
        </li>
      </div>

      <div className="detail-sub-section">
        <h2 className="detail-subtitle">4. Responsive web site</h2>
        <li className="key-li">
          Web pages can effectively adapt to a range of screen sizes,
          ensuring optimal rendering.
        </li>
      </div>
    </div>
  </>
);