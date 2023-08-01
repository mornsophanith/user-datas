import React from "react";
import SearchInput from "../searchInput/Input";
import './Style.css';

const Header: React.FC = () => {
    return(
        <header className="header-container">
            <div className="header-content">
                <a href="/" className="logo"><img src="./unnamed.png" alt="logo"/></a>
                
            </div>
        </header>
    )
}

export default Header;