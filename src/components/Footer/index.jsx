import LinkedIn from "../../assets/iconLinkedIn.png";
import Github from "../../assets/iconGithub.png";
import Email from "../../assets/iconMail.png";
import "./index.css";

const socialMap = [
  { link: "https://www.linkedin.com/in/welliaquimb/", icon: LinkedIn },
  { link: "https://github.com/welliaquim", icon: Github },
  { link: "mailto:welliaquimquim@gmail.com", icon: Email },
];

const Footer = () => {
  return (
    <section className="footer" id="contato">
      <div className="socialicon">
        {socialMap.map(({ link, icon }) => (
          <div className="social">
            <a href={link} target="_blank">
              <img src={icon} alt="social media icon" />
            </a>
          </div>
        ))}
      </div>
      <p className="footer_p">2024 - Desenvolvido por Welliaquim B.</p>
    </section>
  );
};

export default Footer;
