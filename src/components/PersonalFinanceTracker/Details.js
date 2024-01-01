import { useRef } from "react";
import { Tabs, Tab, Link } from "@nextui-org/react";
import { KeyFeaturesEng } from "./KeyFeaturesEng";
import { KeyFeaturesKor } from "./KeyFeaturesKor";
import { MyRoleEng } from "./MyRoleEng";
import { MyRoleKor } from "./MyRoleKor";

function Details() {
  let tabs = [
    {
      id: "English",
      label: "English",
      title1: "Project Background",
      title2: "Description",
      title3: "Key Features",
      title4: "My Role",
      title5: "Github",
      title6: "Deploy",
    },
    {
      id: "Korean",
      label: "Korean",
      title1: "프로젝트 환경",
      title2: "프로젝트 소개",
      title3: "주요 기능",
      title4: "담당 업무",
      title5: "깃허브",
      title6: "데모",
    },
  ];

  const backgroundEng = (
    <>
      <p className="detail-title">Project Background</p>
      <div className="bg-section-box">
        <div className="bg-section">
          <p className="detail-subtitle2">PROJECT TYPE</p>
          <p>Group Project <br/> / Full Stack Web Development</p>
        </div>
        <div className="bg-section">
          <p className="detail-subtitle2">PROJECT LENGTH</p>
          <p>2023.06 - 2023.07 (5 weeks)</p>
        </div>
        <div className="bg-section">
          <p className="detail-subtitle2">TEAM SIZE</p>
          <p>3 members</p>
        </div>
      </div>
      <div className="flex">
        <div className="bg-section">
          <p className="detail-subtitle2">MY ROLE</p>
          <p>Design, Frontend</p>
        </div>
      </div>
      <div className="flex">
        <div className="bg-section">
          <p className="detail-subtitle2">TECHNOLOGIES</p>
          <p>
            Python, React, Typescript, Django, PostgreSQL
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
          <p>그룹 프로젝트 / 풀스텍 웹 개발</p>
        </div>
        <div className="bg-section">
          <p className="detail-subtitle2">프로젝트 기간</p>
          <p>2023.06 - 2023.07 (5주)</p>
        </div>
        <div className="bg-section">
          <p className="detail-subtitle2">팀 사이즈</p>
          <p>3명</p>
        </div>
      </div>
      <div className="flex">
        <div className="bg-section">
          <p className="detail-subtitle2">담당 업무</p>
          <p>디자인, 프로트엔드 개발</p>
        </div>
      </div>
      <div className="flex">
        <div className="bg-section">
          <p className="detail-subtitle2">기술 스택</p>
          <p>
            Python, React, TypeScript, Django, PostgreSQL
          </p>
        </div>
      </div>
    </>
  );

  const descrptionEng = (
    <>
      <p className="detail-title">Description</p>
      <div className="detail-sub-section">
        A budgeting website facilitates the effective management of
        incomes, expenses, and budgets.
      </div>
    </>
  );

  const descrptionKor = (
    <>
      <p className="detail-title">프로젝트 소개</p>
      <div className="detail-sub-section">
      </div>
    </>
  );

  // Navbar
  const part1 = useRef(null);
  const part2 = useRef(null);
  const part3 = useRef(null);
  const part4 = useRef(null);
  const part5 = useRef(null);
  const part6 = useRef(null);

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
      <h1 className="pdp-title">Personal Finance Tracker</h1>
      <Tabs
        aria-label="Dynamic tabs"
        variant="underlined"
        items={tabs}
        size="lg"
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
                  <li onClick={() => jumpToPart(part6)} className="nav-hover">
                    {item.title6}
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

                {/* Part4. My Role */}
                <div className="detail-section" ref={part4}>
                  {item.id === "English" && <> <MyRoleEng /> </>}
                  {item.id === "Korean" && <> <MyRoleKor /> </>}
                </div>

                {/* Part5. Github */}
                <div className="detail-section" ref={part5}>
                  <p className="detail-title">
                    {item.id === "English" && <> {item.title5} </>}
                    {item.id === "Korean" && <> {item.title5} </>}
                  </p>
                  <Link
                    href="https://github.com/solswe/Personal-Finance-Tracker"
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
