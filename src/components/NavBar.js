import React from "react";


function NavBar() {
  const links = ["home", "about", "projects"];

  return (
  <nav>
    {links.map((link, index) => (
      < a key = {index} href="#home">home</a>
    ))}
    </nav>
  );
}
 


export default NavBar;
