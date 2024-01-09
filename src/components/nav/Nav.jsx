import "./Nav.css";

import nav_blade from "../../assets/img/nav_blade.png";

const navItems = [
  { name: "home", link: "" },
  { name: "about", link: "" },
  { name: "products", link: "" },
  { name: "offers", link: "" },
  { name: "contact", link: "" },
];

export default function Nav(params) {
  return (
    <nav className="nav">
      <ul>
        {navItems.map((item, index) => {
          return (
            <li key={index} style={{ position: "relative" }}>
              <a
                href={item.link}
                style={{
                  display: "inline-block",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                {item.name}
                <img
                  src={nav_blade}
                  alt="nav_blade"
                  style={{
                    width: "60px",
                    position: "absolute",
                    top: "-90%",
                    right: "-20%",
                    zIndex: "-1",
                  }}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
