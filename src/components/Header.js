import React from "react";
import Button from "./Button";

function Header(){
    return(<div>
        <ul class="nav-links">
          <li id="home">
            <a href="index.html"><strong>Home</strong></a>
          </li>
          <li><a href="point-system.html">Point-System</a></li>
          <li><a href="about-us.html">About Us</a></li>
        </ul>
        <Button />
    </div>);
}

export default Header;