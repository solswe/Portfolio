import { useState, useEffect } from "react";
import { Link, Tabs, Tab, Chip, Button, ButtonGroup } from "@nextui-org/react";
import jsonData from "../components/Data/AboutData.json";

const links = {
  "Resume": "https://drive.google.com/file/d/1E-Pojv7I0Np2mzrFG50S51cO58YZr5hH/view?usp=drive_link",
  "이력서": "http://www.linkedin.com/in/solkims",
  "Email": "mailto:solkimswe@gmail.com",
  "Linkedin": "http://www.linkedin.com/in/solkims",
  "Github": "https://github.com/solswe"
}
const progLanguages = ["Python", "Java", "C", "C++", "Javascript", "Typescript", "Ocaml", "R"]
const libraries = ["HTML", "CSS", "React", "Next.js", "Node.js", "Flask", "Express"]
const database = ["NoSQL", "MySQL", "PostgreSQL"]

function About(){
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    setAboutData(jsonData.about);
  }, []);

  return (
    <>
      <div className="about-layout">
        <p className="about-title">About me</p>
        <div className="about-main-cont">
          <div className="about-main-col">
            <div className="about-intro">
              안녕하세요, 신입 개발자 김솔 입니다.<br/>
              다양한 기술 스택을 활용하여 사용자 중심의 서비스를 구현하는 웹 개발에 재미와 보람을 느껴 
              웹 개발자로서의 꿈을 키워왔습니다.
              꾸준한 공부를 통해 개발자로서 성장해 왔고, 인턴십을 통해 실무 경험을 쌓았습니다.
              또한, 그룹 프로젝트에 적극적으로 참여하며 효율적인 의사소통을 통해 팀원들과 협업하는 방법을
              배웠습니다.
              프로젝트에서 발생한 도전과 문제들은 저에게 새로운 학습 기회로 다가왔고, 이를 통해 개발자로서
              발전할 수 있었습니다.
              앞으로도 웹 개발에 대한 저의 열정을 바탕으로 꾸준히 노력하여, 팀에 기여할 수 있는 개발자가
              되겠습니다.
            </div>

            <div className="about-intro">
              I'm Sol Kim, a recent computer science graduate deeply passionate
              about web development.
              My academic journey and internship have been a dynamic learning 
              ground, fostering my expertise in web development technologies and
              utilizing a wide range of tools.
              Through hands-on projects, I have honed my ability to create dynamic
              and user-friendly web applications.
              I'm excited about the opportunity to contribute my creative mindset,
              technical proficiency, and collaborative spirit to enhance your web
              development team.
            </div>

            <div className="about-link">
              <ButtonGroup variant="flat" size="md" radius="sm" color="danger">
                {Object.entries(links).map(([key, value]) => (
                  <Button key={key}>
                    <Link href={value} isExternal size="md" underline="hover" color="secondary">
                      {key}
                    </Link>
                  </Button>
                ))}
              </ButtonGroup>
            </div>
          </div>

          <div className="about-main-col">
            <Tabs 
              className="about-tabs"
              defaultSelectedKey="Korean"
              key="lang"
              variant="underlined"
              size="lg"
              color="secondary"
            >
              {aboutData.map(about => (
                <Tab key={about.language} title={about.language}>
                  <div className="about-section container">
                    <div className="about-subsec">
                      <p className="about-sec-title">Experience</p>
                      <p className="item-subtitle ">{about.work}</p>
                      <p className="item-color">SciQuel - Harvard Innovation Labs</p>
                      <p><i>2022.06 - 2022.08</i> | <i>{about.work_location}</i></p>
                      <p className="item-des">{about.work_note}</p>
                    </div>

                    <div className="about-subsec">
                      <p className="about-sec-title">Education</p>
                      <p className="item-subtitle">{about.edu}</p>
                      <p className="item-color">University of Minnesota - Twin Cities</p>
                      <p><i>{about.edu_date}</i> | <i>{about.edu_location}</i></p>
                      <div className="item-des">
                        <li>{about.edu_social}</li>
                        <li>{about.edu_coursework}</li>
                        <p className="nest-li">
                          CSCI 5117 Developing the Interactive web<br />
                          CSCI 4131 Internet Programming<br />
                          CSCI 3081W Program Design & Development
                        </p>
                      </div>
                    </div>

                    <div className="about-subsec">
                      <p className="about-sec-title">Skills</p>
                      <p className="item-subtitle">{about.skill1}</p>
                      <div className="item-skill-des">
                        {progLanguages.map((language, index) => (
                          <Chip key={language} className="chips" color="success" variant="flat" radius="none">
                            {language}
                          </Chip>
                        ))}
                      </div>

                      <p className="item-subtitle">{about.skill2}</p>
                      <div className="item-skill-des">
                        {libraries.map((library, index) => (
                          <Chip key={library} className="chips" color="success" variant="flat" radius="none">
                            {library}
                          </Chip>
                        ))}
                      </div>

                      <p className="item-subtitle">{about.skill3}</p>
                      <div className="item-skill-des">
                        {database.map((db, index) => (
                          <Chip key={db} className="chips" color="success" variant="flat" radius="none">
                            {db}
                          </Chip>
                        ))}
                      </div>

                      <p className="item-subtitle">{about.skill4}</p>
                      <div>
                        {about.skill4_1.map((lang, index) => (
                          <Chip key={lang} className="chips" color="success" variant="flat" radius="none">
                            {lang}
                          </Chip>
                        ))}
                      </div>
                    </div>                    
                  </div>
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
