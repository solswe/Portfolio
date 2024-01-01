import { Link} from "@nextui-org/react";
import { ImgProp } from "./ImgProp";

export const KeyFeaturesKor = (props) => (
  <>
    <p className="detail-title">주요 기능</p>
    <ImgProp />
    <div>
      <div className="detail-sub-section">
        <h2 className="detail-subtitle">1. 추천도서 목록</h2>
        <li className="key-li">
          메인페이지에서 장르별 추천도서 및 베스트셀러 목록 제공.
        </li>
        <li className="key-li">
          <Link className="key-link" href="https://developers.google.com/books">
            Google Books Api
          </Link>
          {" "}의 책 데이터를 이용 및 선별하여 장르별 추천도서 목록에 반영.
        </li>
        <li className="key-li">
          <Link className="key-link" href="https://developer.nytimes.com">
            The New York Times Api
          </Link>
          {" "}를 통해 매주 업데이트되는 베스트셀러 반영.
        </li>
      </div>
      
      <div className="detail-sub-section">
        <h2 className="detail-subtitle">2. 도서 검색 기능</h2>
        <li className="key-li">
          책 제목, 저자, ISBN을 이용하여 도서 검색 가능.
        </li>
        <li className="key-li">
          정확하고 광범위한 검색 결과 제공을 위해{" "}
          <Link className="key-link" href="https://developers.google.com/books">
            Google Books Api
          </Link>
          {" "}이용.
        </li>
        <li className="key-li">
          댓글 기능을 이용하여 다른 이용자들과 의견 공유 가능.
        </li>
      </div>
      
      <div className="detail-sub-section">
        <h2 className="detail-subtitle">3. 나만의 책장(Bookshelf)</h2>
        <li className="key-li">
          사용자가 회원가입 및 로그인 하여 책장에 책 추가 및 관리 가능.
        </li>
        <li className="key-li">
          책장의 이름을 검색하여 다른 사람과 책장 공유 가능.
        </li>
        <li className="key-li">
          <Link className="key-link" href="https://auth0.com/">Auth0</Link>
          {" "}을 이용하여 사용자 인증(authentication) 및 관리.
        </li>
      </div>

      <div className="detail-sub-section">
        <h2 className="detail-subtitle">4. 반응형 웹</h2>
        <li className="key-li">
          스크린 사이즈에 반응하여 최적화된 웹 페이지 화면 제공.
        </li>
      </div>
    </div>
  </>
);
