export default function RemoveCard() {
  return (
    <form className="form form_remove" noValidate>
      <h3 className="edit-profile">¿Estás seguro/a?</h3>
      <button type="submit" className="form__submit">
        Sí, eliminar
      </button>
    </form>
  );
}
