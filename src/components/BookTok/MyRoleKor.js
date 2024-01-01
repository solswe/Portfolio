import { Link } from "@nextui-org/react";

export const MyRoleKor = (props) => (
    <>
      <p className="detail-title">담당 업무</p>
      <div>
        <div className="detail-sub-section">
          <h2 className="detail-subtitle">
            1. 도서 정보 페이지
          </h2>
          {/* Created a page to display book information including cover, title, 
          author, summary, etc., by utilizing Google Books Api for data collection. */}
          <li className="key-li">
            <Link href="https://developers.google.com/books" className="key-link">
              Google Books Api
            </Link>
            {" "}를 이용하여 도서 정보 수집 후, 북커버, 저자, 줄거리 등 도서 정보를 보여주는 페이지 개발.
          </li>
          <li>          
            리뷰 기능 구현, PostgreSQL을 이용하여 리뷰 저장 및 관리.
          </li>
        </div>

        <div className="detail-sub-section">
          <h2 className="detail-subtitle">
            2. 책장(Bookshelf)
          </h2>
          <li className="key-li">
            {/* Developed Bookshelf functionality and related features, including
            the creation of bookshelves, shelving books, and retrieving data. */}
            책장 및 관련 기능 구현, PostgreSQL을 이용하여 데이터 저장 및 관리.
          </li>
        </div>

        <div className="detail-sub-section">
          <h2 className="detail-subtitle">
            3. 프론트엔드 개발
          </h2>
          <li className="key-li">
            HTML, CSS, Javascript를 이용하여 클라이언트 사이드 웹 페이지 개발.
          </li>
        </div>
      </div>
    </>
  );