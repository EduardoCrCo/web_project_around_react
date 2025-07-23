import { useEffect, useRef } from "react";
import FormValidator from "../../../../FormValidator";

export default function EditProfile({ currentUser }) {
  const formRef = useRef();

  useEffect(() => {
    const formElement = formRef.current;
    // const formElement = document.querySelector(".form_profile");
    const formValidator = new FormValidator(formElement, {
      formSelector: ".form",
      inputSelector: ".form__input",
      submitButtonSelector: ".form__submit",
      inactiveButtonClass: "button_inactive",
      inputErrorClass: "form__input_type_error",
      errorClass: "form__input-error_active",
    });
    formValidator.enableValidation();
  }, []);

  return (
    <form ref={formRef} className="form form_profile" noValidate>
      <h3 className="edit-profile">Editar perfil</h3>
      <fieldset className="form__fieldset">
        <input
          type="text"
          name="name"
          id="input-name"
          className="form__input form__input-name"
          placeholder="Nombre"
          minLength="2"
          maxLength="40"
          required
          defaultValue={currentUser.name || ""}
        />
        <span className="input-name-error"></span>
        <input
          id="input-About"
          type="text"
          name="about"
          className="form__input form__input-about"
          placeholder="Acerca de mi"
          required
          minLength="2"
          maxLength="200"
          defaultValue={currentUser.about || ""}
        />
        <span className="input-About-error"></span>
      </fieldset>
      <button type="submit" className="form__submit">
        Guardar
      </button>
    </form>
  );
}
