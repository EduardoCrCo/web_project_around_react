export default function EditProfile() {
  return (
    <form className="form form_profile" noValidate>
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
        />
        <span className="input-About-error"></span>
      </fieldset>
      <button type="submit" className="form__submit">
        Guardar
      </button>
    </form>
  );
}
