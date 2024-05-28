import Codificador from "../../assets/codificador.gif";
import CreditCard from "../../assets/creditcard.gif";
import TipCalculator from "../../assets/tipcalculator.png";
import "./index.css";

const projects = [
  {
    id: 0,
    img: Codificador,
    title: "Decodificador de texto",
    text: "Este decodificador foi um desafio proposto pela Alura ONE para realizar a codificação e decodificação de texto.",
    frameworks: "Frameworks: Javascript Vanilla, HTML e CSS.",
    linkRepo: "https://github.com/welliaquim/Decodificador-Alura",
    linkLive: "https://decodificador-alura-chi.vercel.app/",
  },
  {
    id: 1,
    img: CreditCard,
    title: "Pagamento cartão de crédito",
    text: "Página de pagamento onde o usuário insere os dados do cartão de crédito para prosseguir com a compra.",
    frameworks: "Frameworks: React, React Hook-Form, HTML e CSS.",
    linkRepo: "https://github.com/welliaquim/credit-card-check",
    linkLive: "https://credit-card-check-lovat.vercel.app/",
  },
  {
    id: 2,
    img: TipCalculator,
    title: "Calculadora de gorjetas",
    text: "Calculadora que divide uma conta de restaurante, adicionando a gorjeta e dividindo pelo número de pessoas.",
    frameworks: "Frameworks: React, HTML e CSS.",
    linkRepo: "https://github.com/welliaquim/tip-calculator",
    linkLive: "https://tip-calculator-lac-sigma.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className="experience" id="xp">
      <h1 className="experience_section_title" id="xp">
        Projetos
      </h1>
      <div className="projects_map">
        {projects.map(({ id, img, title, text, frameworks, linkRepo, linkLive }) => (
          <div className="experience_box" key={id}>
            <h2 className="experience_title">{title}</h2>
            <img className="experience_img" src={img} />
            <div className="experience_info">
              <p className="experience_text">{text} </p>
              <h6 className="experience_text">{frameworks} </h6>
              <div className="experience_description">
                <span className="experience_repo">
                  <a href={linkRepo}>
                    <button className="experiencia_botao--repo">GitHub Repo</button>
                  </a>
                </span>
                <span className="experience_demo">
                  <a href={linkLive}>
                    <button className="experiencia_botao--demo">Live Demo</button>
                  </a>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
