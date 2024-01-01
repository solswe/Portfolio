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
    },
    {
      id: "Korean",
      label: "Korean",
      title1: "프로젝트 환경",
      title2: "프로젝트 소개",
      title3: "주요 기능",
      title4: "깃허브",
    },
  ];

  const backgroundEng = (
    <>
      <p className="detail-title">Project Background</p>
      <div className="bg-section-box">
        <div className="bg-section">
          <p className="detail-subtitle2">PROJECT TYPE</p>
          <p>Individual Project / Fullstack Web Development</p>
        </div>
        <div className="bg-section">
          <p className="detail-subtitle2">PROJECT LENGTH</p>
          <p>2023.02 - 2023.03 (3 weeks)</p>
        </div>
        <div className="bg-section"></div>
      </div>
      <div className="flex">
        <div className="bg-section">
          <p className="detail-subtitle2">TECHNOLOGIES</p>
          <p>
            Python, HTML, CSS, JavaScript, Flask, PostgreSQL, Jinja2,
            Gunicorn, and Psycopg2
            <br />
            <Link href="https://render.com/" className="link-font">
              Render
            </Link>
            {" "}for deployment
          </p>
        </div>
      </div>
    </>
  );

  const backgroundKor = (
    <>
      <p className="detail-title">프로젝트 환경</p>
      <div className="bg-section-box">
        <div className="bg-section">
          <p className="detail-subtitle2">프로젝트 타입</p>
          <p>개인 프로젝트 / 풀스택 웹 개발</p>
        </div>
        <div className="bg-section">
          <p className="detail-subtitle2">프로젝트 기간</p>
          <p>2023.02 - 2023.03 (3주)</p>
        </div>
        <div className="bg-section"></div>
      </div>
      <div className="flex">
        <div className="bg-section">
          <p className="detail-subtitle2">기술 스택</p>
          <p>          
            Python, HTML, CSS, JavaScript, Flask, PostgreSQL, Jinja2,
            Gunicorn, Psycopg2
            <br />
            <Link href="https://render.com/" className="link-font">
              Render
            </Link>
            를 이용하여 배포
          </p>
        </div>
      </div>
    </>
  );

  const descrptionEng = (
    <>
      <p className="detail-title">Description</p>
      <div className="detail-sub-section">
        What U Watch is a survey platform designed to collect and record
        responses regarding individuals' favorite movies or TV shows.
      </div>
    </>
  );

  const descrptionKor = (
    <>
      <p className="detail-title">프로젝트 소개</p>
      <div className="detail-sub-section">
        What U Watch는 좋아하는 영화나 TV 프로그램에 관한 응답을 수집하고 기록하는 설문
        웹사이트입니다. 다양한 답변 유형으로 설문지를 구성하고, 제출된 응답을 데이터베이스에
        저장한 뒤 텍스트 및 JSON 형식으로 표시하도록 구현했습니다.
      </div>
    </>
  );

  // Navbar
  const part1 = useRef(null);
  const part2 = useRef(null);
  const part3 = useRef(null);
  const part4 = useRef(null);

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
      <h1 className="pdp-title">What U Watch</h1>
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
                    href="https://github.com/solswe/Survey-server"
                    className="link-font"
                  >
                    Click to see codes
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
