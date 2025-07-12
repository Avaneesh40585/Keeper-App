import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p> ⓒ {year} Keeper-App, Made by Avaneesh.</p>
    </footer>
  );
}

export default Footer;
