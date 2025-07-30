import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Main from "./Main/Main.jsx";
import { useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import api from "../utils/api.js";
import { useEffect } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popupType, setPopupType] = useState(null);

  const handlePopupClose = () => {
    setPopupType(null);
  };

  useEffect(() => {
    api.getUserInfo().then((user) => {
      setCurrentUser(user);
    });
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.updateUser(data.name, data.about).then((newData) => {
        setCurrentUser(newData);
        handlePopupClose();
      });
    })();
  };

  const handleUpdateAvatar = (avatar) => {
    api.updateAvatar(avatar).then((user) => {
      setCurrentUser(user);
      handlePopupClose();
    });
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider
        value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
      >
        <Header />
        <Main
          setPopupType={setPopupType}
          popupType={popupType}
          handlePopupClose={handlePopupClose}
        />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
