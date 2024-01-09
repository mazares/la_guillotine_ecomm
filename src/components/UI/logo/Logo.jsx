import "./Logo.css";

import { motion } from "framer-motion";

import logo1 from "../../../assets/img/guillotine_logo/Scene1.png";

import logo2 from "../../../assets/img/guillotine_logo/Scene2.png";

import { useState, useEffect } from "react";

export default function Logo(params) {
  const [currentLogo, setCurrentLogo] = useState(logo1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prevLogo) => (prevLogo === logo1 ? logo2 : logo1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div className="logo">
      <img src={currentLogo} alt="logo" />
    </motion.div>
  );
}
