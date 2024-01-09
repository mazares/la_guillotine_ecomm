import "./Header.css";

import { motion } from "framer-motion";

import Nav from "../nav/Nav";

import Logo from "../UI/logo/Logo";

// import header_background from "../../assets/img/the-storming-of-the-bastille-15733.jpg";

export default function Header(params) {
  return (
    <header className="header">
      {/* <motion.section
        className="header-background"
        style={{ backgroundImage: `url(${header_background})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.section> */}
      <section className="header-mid">
        <Logo />
        <motion.section
          className="brand-box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="brand">La Guillotine</h1>
          <h3 className="brand">Trouver la bonne taille</h3>
          <h3 className="brand">depuis 1789</h3>
        </motion.section>
      </section>

      <Nav />
    </header>
  );
}
