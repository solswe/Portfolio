import { Link } from "@nextui-org/react";

export const MyRoleKor = (props) => (
    <>
      <p className="detail-title">담당 업무</p>
      <div>
        <div className="detail-sub-section">
          <h2 className="detail-subtitle">
            1. 리뷰 & 위시리스트 폼
          </h2>
          <li className="key-li">
            required와 optional 속성으로 구성된 리뷰 폼과 위시리스트 폼 작성.
          </li>
          <li className="key-li">
            Fetch API를 이용하여 제출된 폼의 데이터를{" "}
            <Link href="https://codehooks.io/" className="key-link">
              NoSQL
            </Link>
            {" "} 데이터베이스에 저장.
          </li>
          <li className="key-li">
            음식점 검색을 통해 리뷰 및 위시리스트 추가시 음식점 이름과 주소가 자동 입력되도록 
            검색 결과와 폼 연결.
          </li>
        </div>

        <div className="detail-sub-section">
          <h2 className="detail-subtitle">
            2. 타임라인 & 위시리스트 페이지
          </h2>
          <li className="key-li">
            데이터베이스에서 사용자가 저장한 리뷰 및 위시리스트 아이템들을 불러와 각 페이지에 게시.
            {/* Retrieve the user's saved reviews and wishlist from the database,
            and display them on the respective pages.  */}
          </li>
          <li className="key-li">
            각 페이지에서 저장된 리뷰 또는 위시리스트 수정 및 삭제 기능 구현.
          </li>
        </div>

        <div className="detail-sub-section">
          <h2 className="detail-subtitle">
            3. 웹 디자인, 프론트엔드 개발
          </h2>
          <li className="key-li">
            Next.js와 Javascript를 이용하여 클라이언트 사이드 웹 페이지 개발.
          </li>
          <li className="key-li">
            CSS, {" "}
            <Link href="https://fontawesome.com/" className="key-link">
              Font Awesome
            </Link>
            ,{" "}
            <Link href="https://bulma.io/" className="key-link">
              Bulma
            </Link>
            {" "}를 이용하여 기능적 요소와 미적 요소를 결합한 웹 기획 및 구현.
          </li>
        </div>
      </div>
    </>
  );