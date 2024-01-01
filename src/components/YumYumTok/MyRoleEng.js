import { Link } from "@nextui-org/react";

export const MyRoleEng = (props) => (
  <>
    <p className="detail-title">My Role</p>
    <div>
      <div className="detail-sub-section">
        <h2 className="detail-subtitle">
          1. Review & Wish list form
        </h2>
        <li className="key-li">
          Created restaurant review and wish list forms with both required
          and optional inputs.
        </li>
        <li className="key-li">
          Stored submitted form data in a{" "}
          <Link className="key-link" href="https://codehooks.io/">
            NoSQL
          </Link>
          {" "}database by utilizing the Fetch API for HTTP requests.
          {/* The code saves submitted form data to a NoSQL database by making 
          HTTP requests to a RESTful API using the Fetch API. */}
        </li>
        <li className="key-li">
          Linked the forms with restaurant search results to automatically
          fill in the restaurant's name and address fields.
        </li>
      </div>

      <div className="detail-sub-section">
        <h2 className="detail-subtitle">
          2. Timeline & Wish list page
        </h2>
        <li className="key-li">
          Retrieve the user's saved reviews and wishlist from the database,
          and display them on the respective pages. 
        </li>
        <li className="key-li">
          Added functionality for editing and deleting reviews and wishlist
          items on the respective pages.
        </li>
      </div>

      <div className="detail-sub-section">
        <h2 className="detail-subtitle">
          3. Web design and Frontend development
        </h2>
        <li className="key-li">
          Developed the client side of web pages using Next.js and Javascript. 
        </li>
        <li className="key-li">
          Designed and implemented a visually appealing and responsive design
          using CSS, {" "}
          <Link className="key-link" href="https://fontawesome.com/">
            Font Awesome
          </Link>
          ,{" "}and{" "}
          <Link className="key-link" href="https://bulma.io/">
            Bulma
          </Link>.
        </li>
      </div>
    </div>
  </>
);