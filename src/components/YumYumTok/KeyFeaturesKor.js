import { Link } from "@nextui-org/react";
import { ImgProp } from "./ImgProp";

export const KeyFeaturesKor = (props) => (
  <>
    <p className="detail-title">주요 기능</p>
    <ImgProp />
    <div>
      <div className="detail-sub-section">
        <h2 className="detail-subtitle">1. 유저 전용 페이지</h2>
        <li className="key-li">
          랜딩 페이지에서 회원 가입 및 로그인 후 사용자의 데이터에 접근 가능.
        </li>
        <li className="key-li">
          <Link href="https://clerk.com/" className="key-link">Clerk</Link>
          {" "}을 이용하여 사용자 인증(authentication) 및 관리.
        </li>
      </div>
      
      <div className="detail-sub-section">
        <h2 className="detail-subtitle">2. 음식점 검색</h2>         
        <li className="key-li">
          <Link
            className="key-link"
            href="https://developers.google.com/maps/documentation/javascript"
          >
            Google Maps Api
          </Link>
          {" "}에서 제공하는 음식점 정보를 활용하여 넓은 검색 범위와 정확한 검색 결과 제공.
        </li>
        <li className="key-li">
          음식점 이름, 주소, 또는 관련 키워드(메뉴, 카테고리 등)를 이용하여 검색 가능하며,
          검색어 입력시 서치바 아래에 관련 음식점 자동완성 표기.
        </li>
        <li className="key-li">
          <Link
            className="key-link"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API"
          >
            Geolocation Api
          </Link>
          {" "}를 이용하여 사용자의 지리적 위치 정보를 기반으로 필터링 및 정렬된 검색 결과 제공.
        </li>
      </div>
      
      <div className="detail-sub-section">
        <h2 className="detail-subtitle">3. 음식점 리뷰 & 위시리스트 기록</h2>
        <li className="key-li">
          사용자가 직접 관련 정보를 입력하거나 검색 기능을 이용하여 리뷰 또는 위시리스트 작성.
        </li>
        <li className="key-li">
          리뷰 작성시 음식점 이름, 주소, 방문 날짜, 평점, 사진, 추가 코멘트 기록 가능.
        </li>
        <li className="key-li">
          위시리스트 작성시 음식점 이름, 주소, 추가 코멘트 기록 가능.
        </li>
      </div>
      
      <div className="detail-sub-section">
        <h2 className="detail-subtitle">4. 타임라인</h2>
        <li className="key-li">
          작성된 모든 리뷰들을 가장 최근에 저장된 순서로 보여주는 페이지.
        </li>
        <li className="key-li">
          저장된 리뷰 수정 및 삭제 가능.
        </li>
      </div>

      <div className="detail-sub-section">
        <h2 className="detail-subtitle">5. 위시리스트</h2>
        <li className="key-li">
          작성된 모든 위시리스트 아이템들을 게시하는 페이지.
        </li>
        <li className="key-li">
          저장된 위시리스트 수정 및 삭제 가능.
        </li>
      </div>

      <div className="detail-sub-section">
        <h2 className="detail-subtitle">6. 반응형 웹</h2>
        <li className="key-li">
          스크린 사이즈에 반응하여 최적화된 웹 페이지 화면 제공.
        </li>
      </div>
    </div>
  </>
);
