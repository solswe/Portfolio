import { useRef } from "react";
import { Tabs, Tab, Link } from "@nextui-org/react";
import { KeyFeaturesEng } from "./KeyFeaturesEng";
import { KeyFeaturesKor } from "./KeyFeaturesKor";

function Details() {
  let tabs = [
    {
      id: "English",
      label: "English",
      title1: "Project Background",
      title2: "Description",
      title3: "Key Features",
      title4: "Github",
      title5: "Deploy",
    },
    {
      id: "Korean",
      label: "Korean",
      title1: "프로젝트 환경",
      title2: "프로젝트 소개",
      title3: "주요 기능",
      title4: "깃허브",
      title5: "데모",
    },
  ];

  const backgroundEng = (
    <>
      <p className="detail-title">Project Background</p>
      <div className="bg-section-box">
        <div className="bg-section">
          <p className="detail-subtitle2">PROJECT TYPE</p>
          <p>Individual Project / Frontend Web Development</p>
        </div>
        <div className="bg-section">
          <p className="detail-subtitle2">PROJECT LENGTH</p>
          <p>2023.11 - 2023.12 (4 weeks)</p>
        </div>
        <div className="bg-section"></div>
      </div>
      <div className="bg-section">
        <p className="detail-subtitle2">TECHNOLOGIES</p>
        <p>
          React, Javascript, and CSS<br />
          <Link className="link-font" href="https://www.netlify.com/">
            Netlify
          </Link>
          {" "}for deployment
        </p>
      </div>
    </>
  );

  const backgroundKor = (
    <>
      <p className="detail-title">프로젝트 환경</p>
      <div className="bg-section-box">
        <div className="bg-section">
          <p className="detail-subtitle2">프로젝트 타입</p>
          <p>개인 프로젝트 / 프론트엔드 웹 개발</p>
        </div>
        <div className="bg-section">
          <p className="detail-subtitle2">프로젝트 기간</p>
          <p>2023.11 - 2023.12 (4주)</p>
        </div>
        <div className="bg-section"></div>
      </div>
      <div className="bg-section">
        <p className="detail-subtitle2">기술 스택</p>
        <p>
          React, Javascript, CSS<br/>
          <Link className="link-font" href="https://www.netlify.com/">
            Netlify
          </Link>
          를 이용하여 배포
        </p>
      </div>
    </>
  );

  const descrptionEng = (
    <>
      <p className="detail-title">Description</p>
      <div className="detail-sub-section">
        I wanted to create an online space to share my work and connect
        with others. The goals for my portfolio were to be:
        <div className="port-lists">
          <li className="key-li">
            A one-stop destination to provide insights about me and exhibit
            my work in both English and Korean
          </li>
          <li className="key-li">
            A way to showcase my coding skills and express my passion for
            frontend and UI/UX design
          </li>
        </div>
        <br/>I hope this website provides you with a glimpse into my 
        journey and passions!
      </div>
    </>
  );

  const descrptionKor = (
    <>
      <p className="detail-title">프로젝트 소개</p>
      <div className="detail-sub-section">
        '나'와 주요 프로젝트를 소개하고, 다른 사람들과 소통할 수 있는 온라인 공간을 만들고자
        기획한 프로젝트로, 아래 항목들에 초점을 두고 진행하였습니다.
        <div className="port-lists">
          <li className="key-li">
            정보 전달에 용이한 가독성을 갖춘 레이아웃
          </li>
          <li className="key-li">
            한국어와 영어로 소통할 수 있는 하나의 공간
          </li>
          <li className="key-li">
            웹 개발에 대한 나의 열정을 넣은 미적, 기능적 요소를 갖춘 웹
          </li> 
        </div>
      </div>
    </>
  );

  // Navbar
  const part1 = useRef(null);
  const part2 = useRef(null);
  const part3 = useRef(null);
  const part4 = useRef(null);
  const part5 = useRef(null);

  const jumpToPart = (elementRef) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="detail-layout">
      <h1 className="pdp-title">Portfolio</h1>
      <Tabs
        aria-label="Dynamic tabs"
        variant="underlined"
        items={tabs}
        color="secondary"
        className="detail-tab"
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <div className="container detail-cont">
              <div className="container detail-nav">
                <ul>
                  <li onClick={() => jumpToPart(part1)} className="nav-hover">
                    {item.title1}
                  </li>
                  <li onClick={() => jumpToPart(part2)} className="nav-hover">
                    {item.title2}
                  </li>
                  <li onClick={() => jumpToPart(part3)} className="nav-hover">
                    {item.title3}
                  </li>
                  <li onClick={() => jumpToPart(part4)} className="nav-hover">
                    {item.title4}
                  </li>
                  <li onClick={() => jumpToPart(part5)} className="nav-hover">
                    {item.title5}
                  </li>
                </ul>
              </div>

              <div className="container detail-description">
                {/* Part1. Project Background */}
                <div className="detail-section" ref={part1}>
                  {item.id === "English" && <> {backgroundEng} </>}
                  {item.id === "Korean" && <> {backgroundKor} </>}
                </div>

                {/* Part2. Description */}
                <div className="detail-section" ref={part2}>
                  {item.id === "English" && <> {descrptionEng} </>}
                  {item.id === "Korean" && <> {descrptionKor} </>}
                </div>

                {/* Part3. Key Features */}
                <div className="detail-section" ref={part3}>
                  {item.id === "English" && <> <KeyFeaturesEng /> </>}
                  {item.id === "Korean" && <> <KeyFeaturesKor /> </>}
                </div>

                {/* Part4. Github */}
                <div className="detail-section" ref={part4}>
                  <p className="detail-title">
                    {item.id === "English" && <> {item.title4} </>}
                    {item.id === "Korean" && <> {item.title4} </>}
                  </p>
                  <Link
                    href="https://github.com/solswe/Portfolio"
                    className="link-font"
                  >
                    Click to see codes
                  </Link>
                </div>

                {/* Part5. Deploy */}
                <div className="detail-section" ref={part5}>
                  <p className="detail-title">
                    {item.id === "English" && <> {item.title5} </>}
                    {item.id === "Korean" && <> {item.title5} </>}
                  </p>
                  <Link
                    href="https://solkim.netlify.app/"
                    className="link-font"
                  >
                    Click to see demopage
                  </Link>
                </div>
              </div>
            </div>
          </Tab>
        )}
      </Tabs>
    </div>
  );
}

export default Details;
