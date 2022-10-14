import React from "react";
import "./footer.css"
import gitIcon from "./images/github.png"

const Footer = () => {
    return (
        <div className="footer">
            <p>Developed by &nbsp;<a href="https://github.com/almeida-91">almeida-91 </a>&nbsp;<img src={gitIcon} alt="GitHub Icon" /></p>
        </div>
    )
}

export default Footer;