import { Link } from "@nextui-org/react";

export const MyRoleEng = (props) => (
  <>
    <p className="detail-title">My Role</p>
    <div>
      <div className="detail-sub-section">
        <h2 className="detail-subtitle">
          1. Book information page
        </h2>
        <li className="key-li">
          Created a page to display book information including cover,
          title, author, summary, etc., by utilizing{" "}
          <Link href="https://developers.google.com/books" className="key-link">
            Google Books Api
          </Link>
          {" "}for data collection.
        </li>
        <li className="key-li">
          Added a review feature and managed submitted reviews through
          a PostgreSQL database.
        </li>
      </div>

      <div className="detail-sub-section">
        <h2 className="detail-subtitle">
          2. Bookshelf
        </h2>
        <li className="key-li">
          Developed Bookshelf functionality and related features,
          including the creation of bookshelves, shelving books,
          and retrieving data.
        </li>
        <li className="key-li">
          Administered Bookshelf data using a PostgreSQL database.
        </li>
      </div>

      <div className="detail-sub-section">
        <h2 className="detail-subtitle">
          3. Frontend development
        </h2>
        <li className="key-li">
          Developed the client side of web pages using HTML, CSS, and
          Javascript.
        </li>
      </div>
    </div>
  </>
);