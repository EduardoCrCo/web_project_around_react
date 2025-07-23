import { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import EditAvatar from "./components/forms/Avatar/EditAvatar";
import EditProfile from "./components/forms/EditProfile/EditProfile";
import NewCard from "./components/forms/NewCard/NewCard";
import RemoveCard from "./components/forms/RemoveCard/RemoveCard";
import Popup from "./components/Popup/Popup";
import AvatarImage from "../../images/dji_author.jpg";
import EditProfileInfo from "../../images/Vector_edit_profile.svg";
import EditButton from "../../images/edit-button.svg";
import AddImage from "../../images/Vector_plus.svg";
import ImagePopup from "./components/forms/ImagePopup/ImagePopup";
import api from "../Api";

// const cards = [
//   {
//     isLiked: false,
//     _id: "5d1f0611d321eb4bdcd707dd",
//     name: "Yosemite Valley",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
//     owner: "5d1f0611d321eb4bdcd707dd",
//     createdAt: "2019-07-05T08:10:57.741Z",
//   },
//   {
//     isLiked: false,
//     _id: "5d1f064ed321eb4bdcd707de",
//     name: "Lake Louise",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
//     owner: "5d1f0611d321eb4bdcd707dd",
//     createdAt: "2019-07-05T08:11:58.324Z",
//   },
// ];

export default function Main() {
  const [popupType, setPopupType] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const avatarPopupTypes = {
    children: <EditAvatar />,
  };

  const profilePopupTypes = {
    children: <EditProfile currentUser={currentUser} />,
  };

  const newCardPopupTypes = {
    children: <NewCard />,
  };

  const removeCardPopupTypes = {
    children: <RemoveCard />,
  };

  const handlePopupClose = () => {
    setPopupType(null);
    setSelectedCard(null);
  };

  useEffect(() => {
    api.getAppInfo().then(([remoteUser, remoteCards]) => {
      setCards(remoteCards);
      setCurrentUser(remoteUser);
    });
  }, []);

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile-avatar">
            <img
              src={currentUser.avatar || AvatarImage}
              alt="imagen del perfil"
              className="profile-avatar__image"
            />
            <img
              src={EditProfileInfo}
              onClick={() => setPopupType(avatarPopupTypes)}
              alt="icono de editar imagen de perfil"
              className="profile-avatar__edit_icon"
            />
          </div>
          <div className="profile-info">
            <div className="profile-info__name-and-button">
              <p className="profile-info__name profile-info__name_text_overflow">
                {currentUser.name || "Nombre del usuario"}
              </p>
              <button
                className="profile-info__edit-button"
                onClick={() => setPopupType(profilePopupTypes)}
              >
                <img
                  src={EditButton}
                  alt="boton de editar informacion del perfil"
                  className="profile-info__edit-button-image"
                />
              </button>
            </div>
            <p className="profile-info__about profile-info__about_text_overflow">
              {currentUser.about || "Acerca de mi"}
            </p>
          </div>
          <button
            className="profile__add-button"
            type="button"
            onClick={() => setPopupType(newCardPopupTypes)}
          >
            <img
              src={AddImage}
              alt="boton de agregar"
              className="profile__add-button-image"
            />
          </button>
        </section>

        <section className="elements">
          <div className="grid">
            {cards.map((card, index) => (
              <Card
                key={index}
                onCardClick={() => {
                  setSelectedCard(card);
                }}
                name={card.name}
                link={card.link}
                isLiked={card.isLiked}
              />
            ))}
          </div>
        </section>
      </main>
      {popupType && (
        <Popup onClose={handlePopupClose}>{popupType.children}</Popup>
      )}
      {selectedCard && (
        <Popup onClose={handlePopupClose} customClassName="popup__body_image">
          <ImagePopup name={selectedCard.name} link={selectedCard.link} />
        </Popup>
      )}
    </>
  );
}
