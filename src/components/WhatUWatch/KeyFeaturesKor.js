import { Link } from "@nextui-org/react";
import { ImgProp } from "./ImgProp";

export const KeyFeaturesKor = (props) => (
  <>
    <p className="detail-title">주요 기능</p>
    <ImgProp />
    <div>
      <div className="detail-sub-section">
        <h2 className="detail-subtitle">1. 설문 응답 수집</h2>
        <li className="key-li">
          설문 응답 수집 후, PostgreSQL 데이터 베이스에 저장.
        </li>
      </div>

      <div className="detail-sub-section">
        <h2 className="detail-subtitle">2. 설문 결과 페이지</h2>
        <li className="key-li">
          두개의 설문 결과 페이지를 만들어, 한곳에서는 제출된 모든 응답들을 JSON 형식으로
          공유하고, 나머지 페이지에서는 텍스트 형식의 응답들만 정리하여 공유. 
        </li>
      </div>


      <div className="detail-sub-section">
        <h2 className="detail-subtitle">3. 웹 디자인, 프론트엔드 개발</h2>
        <li className="key-li">
          CSS 와{" "}
          <Link className="key-link" href="https://purecss.io/">
            Pure CSS
          </Link>
          를 이용하여 디자인적 요소를 갖춘 웹 페이지 구현.
        </li>
      </div>
    </div>
  </>
);