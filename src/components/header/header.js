import "./header.scss";
import React, { Component } from 'react'

const Header = ({replase}) => {
    return (
        <header className={(!replase && `header-dark`) || ``}>
          <div className="soat">9:41</div>
          <div className="icon">
            <img
              className="zaryad"
              src="https://cdn-icons-png.flaticon.com/512/7482/7482012.png"
              alt=""
            />
          </div>
        </header>
    );
}

export default Header;
