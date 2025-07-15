export default function NewCard() {
  return (
    <form className="form form_place" noValidate>
      <h3 className="edit-profile">Nuevo Lugar</h3>
      <fieldset className="form__fieldset">
        <input
          id="inputTitle"
          type="text"
          name="name"
          className="form__input form__input_title"
          placeholder="Titulo"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="inputTitle-error"></span>
        <input
          id="inputImageUrl"
          type="url"
          name="link"
          className="form__input form__input_url-image"
          placeholder="URL de la imagen"
          required
        />
        <span className="inputImageUrl-error"></span>
      </fieldset>
      <button type="submit" className="form__submit">
        Crear
      </button>
    </form>
  );
}
