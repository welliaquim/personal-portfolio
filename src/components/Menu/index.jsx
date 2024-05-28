import "./index.css";

const menuItems = [
  { href: "#sobremim", text: "Sobre mim" },
  { href: "#xp", text: "Projetos" },
  { href: "mailto:welliaquimquim@gmail.com", text: "Contrate-me" },
];

const HeaderMenu = () => {
  return (
    <section className="menu">
      <ul className="menu_list">
        {menuItems.map(({ href, text }, index) => (
          <li key={index} className="menu_list_item_contato">
            <a href={href}>{text}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default HeaderMenu;
