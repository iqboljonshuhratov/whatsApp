import "./whatsapp.scss";
import React from "react";
import ThemeContext from "../contex/ThemeContext";
import { useContext } from "react";

const Whatsapp = ({chat}) => {
  const replase = useContext(ThemeContext)
    return(
        <div
        className={(!replase && `container container-dark`) || ` container`}
      >
        {
          chat.map((v,i)=>
          <div className="row mt-2 d-flex ps-2">
          <div className="left-box">
            <img
              src={`${v.url}`}
              alt=""
            />
          </div>
          <div className="right-box">
            <div className="top d-flex justify-content-between">
              <p>{v.name}</p>
              <span>{v.time}</span>
            </div>
            <div className="bottom">
              <p>Lorem ipsum dolor sit, amet consec...</p>
            </div>
          </div>
        </div>
        )
        }




      </div>

    );
}

export default Whatsapp