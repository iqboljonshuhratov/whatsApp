import {
  faContactBook,
  faMoon,
  faSun,
} from "@fortawesome/free-regular-svg-icons";
import {
  faChalkboardTeacher,
  faHandDots,
  faListDots,
  faSearch,
  faTeletype,
  faThermometerEmpty,
  faTrashRestore,
  faTree,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Header from "./components/header/header";
import "./App.scss";
import Whatsapp from "./components/whatsapp/whatsapp";
import ThemeContext from "./components/contex/ThemeContext";

function App() {
  // bu tn kun rejimi uchun
  const [replase, setReplase] = useState(true);
  // bu yuqori istorislar uchun
  const [istorya, setIstorya] = useState([
    {
      title: "Komil",
      url: "https://gamerwall.pro/uploads/posts/2022-09/1663069331_1-gamerwall-pro-p-biznesmen-v-mashine-vkontakte-3.jpg",
    },
    {
      title: "Said",
      url: "https://www.a-nechaev.com/wp-content/uploads/2017/04/Dollarphotoclub_64980674-700x466.jpg",
    },
    {
      title: "Jec",
      url: "https://incrussia.ru/wp-content/uploads/2019/03/iStock-918704584-1.jpg",
    },
    {
      title: "Bek",
      url: "https://thumbs.dreamstime.com/b/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%BC%D0%B5%D0%BD-%D0%B2-%D0%BE%D1%84%D0%B8%D1%81%D0%B5-%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8B%D0%B9-%D1%81%D0%B8%D0%B4%D0%B8%D1%82-%D0%BD%D0%B0-%D1%81%D1%82%D0%BE%D0%BB%D0%B5-%D0%B8-%D0%BF%D0%BE-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D1%83-175180548.jpg",
    },
    {
      title: "Ismoil",
      url: "http://realybiz.ru/wp-content/uploads/2014/01/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%BC%D0%B5%D0%BD1.jpg",
    },
    {
      title: "Islom",
      url: "https://new-retail.ru/upload/iblock/54a/54aa0b0560e4081c6f0b0a7a52eb8d69.jpg",
    },
    {
      title: "Habib",
      url: "https://static7.tgstat.ru/channels/_0/2c/2c25e52dded084e098f95293171c07ad.jpg",
    },
  ]);

  // bu pastki yozishmalar qismi uchun

  const [chat, setChat] = useState([
    {
      name: "Komil",
      url: "https://gamerwall.pro/uploads/posts/2022-09/1663069331_1-gamerwall-pro-p-biznesmen-v-mashine-vkontakte-3.jpg",
      time: "03:22",
    },
    {
      name: "Said",
      url: "https://www.a-nechaev.com/wp-content/uploads/2017/04/Dollarphotoclub_64980674-700x466.jpg",
      time: "04:22",
    },

    {
      name: "Jec",
      url: "https://incrussia.ru/wp-content/uploads/2019/03/iStock-918704584-1.jpg",
      time: "04:22",
    },
    {
      name: "Bek",
      url: "https://thumbs.dreamstime.com/b/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%BC%D0%B5%D0%BD-%D0%B2-%D0%BE%D1%84%D0%B8%D1%81%D0%B5-%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8B%D0%B9-%D1%81%D0%B8%D0%B4%D0%B8%D1%82-%D0%BD%D0%B0-%D1%81%D1%82%D0%BE%D0%BB%D0%B5-%D0%B8-%D0%BF%D0%BE-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D1%83-175180548.jpg",
      time: "04:22",
    },
    {
      name: "Ismoil",
      url: "http://realybiz.ru/wp-content/uploads/2014/01/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%BC%D0%B5%D0%BD1.jpg",
      time: "04:22",
    },
    {
      name: "Islom",
      url: "https://new-retail.ru/upload/iblock/54a/54aa0b0560e4081c6f0b0a7a52eb8d69.jpg",
      time: "04:22",
    },
    {
      name: "Habib",
      url: "https://static7.tgstat.ru/channels/_0/2c/2c25e52dded084e098f95293171c07ad.jpg",
      time: "04:22",
    },
    {
      name: "Baxrom",
      url: "https://www.a-nechaev.com/wp-content/uploads/2017/04/Dollarphotoclub_64980674-700x466.jpg",
      time: "04:22",
    }, 
  ])

  // tun kun knokalari uchun function

  const changeReplase = (v) => setReplase(v);

  return (
    <ThemeContext.Provider value={replase}>
    <div className="App d-flex justify-content-center align-items-center">
      <div className="whatsApp d-flex">
        {/* header qismi */}
        <Header replase={replase}/>
        {/* aside qisim  */}
        <aside className={(!replase && ` p-2 aside-dark`) || `p-2`}>
          {/* Asside top qismi yani qidiruv kabi elementlar joylashgan qismi */}
          <div className="asideTop d-flex justify-content-between">
            <h3>WhatsApp</h3>
            <div>
              <button className="btn">
                <FontAwesomeIcon icon={faSearch} />
              </button>
              <button className="btn">
                <FontAwesomeIcon icon={faListDots} />
              </button>
              {(!replase && (
                <button
                  className="btn btn-warning"
                  onClick={() => changeReplase(!replase)}
                >
                  <FontAwesomeIcon icon={faSun} />
                </button>
              )) || (
                <button
                  className="btn btn-dark"
                  onClick={() => changeReplase(!replase)}
                >
                  <FontAwesomeIcon icon={faMoon} />
                </button>
              )}
            </div>
          </div>
          {/* Asside bottom qismi yani istorya qoyiladigon qisim*/}
          <div className="asideBottom p-1">
            {istorya.map((value, index) => 
              <div className="istory ms-1">
                <img
                  src={`${value.url}`}
                  alt=""
                />
                <p>{value.title}</p>
              </div>
            )}
          </div>
        </aside>

        {/* yozishmalar qismi */}

        <Whatsapp chat={chat} />

        {/* kontaktlar qismi yani eng quyi qismi  */}

        <div
          className={
            (!replase && `futter futter-dark d-flex justify-content-between`) ||
            `futter d-flex justify-content-between`
          }
        >
          <button className="btn">
            <FontAwesomeIcon icon={faChalkboardTeacher} />
          </button>
          <button className="btn">
            <FontAwesomeIcon icon={faTeletype} />
          </button>
          <button className="btn">
            <FontAwesomeIcon icon={faContactBook} />
          </button>
        </div>
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
