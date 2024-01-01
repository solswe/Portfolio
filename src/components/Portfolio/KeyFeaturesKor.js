import { Link } from "@nextui-org/react";
import { ImgProp } from "./ImgProp";

export const KeyFeaturesKor = (props) => (
  <>
    <p className="detail-title">주요 기능</p>
    <ImgProp />
    <div>
      <div className="detail-sub-section">
        <h2 className="detail-subtitle">1. 한국어와 영어 콘텐츠</h2>
        <li className="key-li">
          한국어와 영어로 콘텐츠를 구성하여 보다 많은 사람들과 소통할 수 있는 공간 구현.
        </li>
      </div>

      <div className="detail-sub-section">
        <h2 className="detail-subtitle">2. 디자인과 UI/UX</h2>
        <li className="key-li">
          CSS를 이용하여 스크린 사이즈에 대응하는 반응형 웹 구현.
        </li>
        <li className="key-li">
          <Link className="key-link" href="https://nextui.org/">
            Next UI
          </Link>
          ,{" "}
          <Link className="key-link" href="https://www.framer.com/motion/">
            Framer
          </Link>
          {" "}를 이용하여 다크 모드, 모션 등 재미있는 디자인 효과 추가.
        </li>
      </div>
    </div>
  </>
);