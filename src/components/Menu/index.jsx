const menuItems = [
  { href: "#sobremim", text: "Sobre mim" },
  { href: "#skills", text: "Skills" },
  { href: "#formacao", text: "Formações e Cursos" },
  { href: "#xp", text: "Projetos" },
];

const HeaderMenu = () => {
  return (
    <section className="menu">
      <nav>
        <ul className="menu__list">
          {menuItems.map(({ href, text }, index) => (
            <li key={index} className="menu__list__item__contato">
              <a href={href}>{text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
export default HeaderMenu;
