import "./index.css";
import icon from "../../assets/graduate.png";
import reactIcon from "../../assets/react_icon.png";
import htmlIcon from "../../assets/html.png";
import javascriptIcon from "../../assets/js_icon.png";
import cssIcon from "../../assets/css_icon.png";

const skillsMap = [
  { icon: htmlIcon, name: "HTML5" },
  { icon: cssIcon, name: "CSS" },
  { icon: javascriptIcon, name: "Javascript" },
  { icon: reactIcon, name: "React" },
];

const AboutMe = () => {
  return (
    <>
      <section className="about" id="sobremim">
        <div className="about_container">
          <h1 className="about_title">Sobre mim</h1>
          <div className="school">
            <img src={icon} alt="graduate icon" />
            <h5>Education</h5>
            <p>Estudante na 6ª turma Alura ONE - 2024</p>
          </div>
          <div className="about_p">
            <p className="about_paragraph">
              Possuo cinco anos de experiência em atuar com atendimento ao cliente, sempre buscando compreender as
              necessidades do público-alvo no qual estou trabalhando.
            </p>
            <p className="about_paragraph">
              Atualmente posso afirmar estar focado no meu desenvolvimento profissional para atender as expectativas do
              mercado de trabalho em relação aos profissionais de T.I.
            </p>
            <p className="about_paragraph">
              Meu principal objetivo no momento é conseguir minha primeira oportunidade como desenvolvedor FrontEnd.
            </p>
          </div>
        </div>
        <div className="skills">
          <h3 className="skills_title" id="skills">
            Skills
          </h3>
          <div className="skills_line">
            <div className="skills_box">
              {skillsMap.map(({ icon, name }) => {
                return (
                  <ul>
                    <li className="skills_img">
                      <img src={icon} />
                    </li>
                    <li className="skills_name">{name}</li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
