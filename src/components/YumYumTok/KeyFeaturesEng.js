import { Link } from "@nextui-org/react";
import { ImgProp } from "./ImgProp";

export const KeyFeaturesEng = (props) => (
  <>
    <p className="detail-title">Key Features</p>
    <ImgProp />
    <div>
      <div className="detail-sub-section">
        <h2 className="detail-subtitle">1. User specific content</h2>
        <li className="key-li">
          The landing page provides a gateway for users to sign up and log
          in, granting access to their data.
        </li>
        <li className="key-li">
          User authentication and management are handled using{" "}
          <Link href="https://clerk.com/" className="key-link">Clerk</Link>.
        </li>
      </div>
      
      <div className="detail-sub-section">
        <h2 className="detail-subtitle">2. Restaurant search</h2>
        <li className="key-li">
          Users can search for restaurants not only by the restaurant's name
          and address but also by using food-related keywords. Relevant search
          terms will be displayed under the search bar to assist in finding
          restaurants more conveniently.
        </li>
        <li className="key-li">
          To enhance the search experience, we leverage users' geographical
          location. This feature delivers nearby restaurant options during
          searches and enables effective filtering and sorting of search results
          based on geographical proximity.{" "}
          <Link
            className="key-link"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API"
          >
            Geolocation Api
          </Link>
          {" "}is utilized to access users' locations, enabling us to suggest
          nearby restaurant options.
        </li>          
        <li className="key-li">
          <Link
            className="key-link"
            href="https://developers.google.com/maps/documentation/javascript"
          >
            Google Maps Api
          </Link>
          {" "}is used to provide comprehensive and precise restaurant information.
        </li>
      </div>
      
      <div className="detail-sub-section">
        <h2 className="detail-subtitle">3. Restaurant review & Wishlist item</h2>
        <li className="key-li">
          Users can choose to write restaurant reviews or add restaurants
          to their wishlist either by utilizing the search bar or by
          manually entering the details.
        </li>
        <li className="key-li">
          A review can include the restaurant's name, address, date of
          visit, rating, a picture, and additional comments.
        </li>
        <li className="key-li">
          A wishlist item can include the restaurant's name, address,
          and comments.
        </li>
      </div>

      <div className="detail-sub-section">
        <h2 className="detail-subtitle">4. Timeline</h2>
        <li className="key-li">
          Saved reviews appear on the timeline in the order of posting,
          with the most recent first.
        </li>
        <li className="key-li">
          Users can edit or delete reviews directly from the timeline.
        </li>
      </div>

      <div className="detail-sub-section">
        <h2 className="detail-subtitle">5. Wishlist</h2>
        <li className="key-li">
          Saved wishlist items can be accessed, edited, and removed on
          the wishlist page.
        </li>
      </div>

      <div className="detail-sub-section">
        <h2 className="detail-subtitle">6. Responsive web site</h2>
        <li className="key-li">
          Web pages can effectively adapt to a range of screen sizes,
          ensuring optimal rendering.
        </li>
      </div>
    </div>
  </>
);
