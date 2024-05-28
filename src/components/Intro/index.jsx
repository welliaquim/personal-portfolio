import perfil from "../../assets/perfil.jpg";
import iconWhats from "../../assets/iconWhatsapp.png";
import "./index.css";

const IntroInfo = () => {
  return (
    <section className="title">
      <img className="profile" src={perfil} alt="profile picture" />
      <div className="title_container" id="#sobremim">
        <div className="title_bio">
          <h1>Welliaquim B.</h1>
          <h2>Desenvolvedor Front End</h2>
        </div>
        <div className="contatos">
          <button className="cv">Download CV</button>
          <button className="contato">
            <a href="https://wa.me/67981288984" target="_blank">
              Contatar
              <img className="whatsapp" src={iconWhats} alt="whatsapp icon" />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntroInfo;
