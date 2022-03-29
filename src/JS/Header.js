import React from "react";
import "../CSS/Header.css"


function Header() {
    return (
        <div className="header__container">
            <div className="header__inner">
                <ul className="header__menu">
                    <li className="header__menu-item">Home</li>
                    <li className="header__menu-item" ><a className="item__list">Catalog</a>
                        <ul className="header__menu">
                            <li className="header__menu-item"><a>Iphone</a></li>
                            <li className="header__menu-item" ><a>Meizy</a></li>
                            <li className="header__menu-item"><a>Huawei</a></li>
                            <li className="header__menu-item"><a>Oppo</a></li>
                        </ul>

                    </li>

                    <li className="header__menu-item">Cart</li>
                    <li className="header__menu-item">Sales</li>
                </ul>
              <button className="button__sign">Sign in</button>
            </div>
        </div>
    );
}

export default Header;