import { useContext, useRef } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const formRef = useRef();
  const userContext = useContext(CurrentUserContext);
  const { handleUpdateAvatar } = userContext;

  const handleSubmit = (event) => {
    event.preventDefault();
    const avatar = formRef.current.link.value;
    handleUpdateAvatar(avatar);
  };

  return (
    <form
      className="form form_avatar"
      onSubmit={handleSubmit}
      ref={formRef}
      noValidate
    >
      <h3 className="edit-profile">Cambiar foto de perfil</h3>
      <input
        id="inputAvatarUrl"
        type="url"
        name="link"
        className="form__input form__input_url-image"
        placeholder="URL de la imagen"
        required
      />
      <span className="inputImageUrl-error"></span>
      <button type="submit" className="form__submit">
        Guardar
      </button>
    </form>
  );
}
