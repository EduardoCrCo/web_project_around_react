export default function Popup(props) {
  const { children, onClose, customClassName } = props;
  return (
    <div className="popup popup_opened">
      <div className="popup__overlay"></div>
      <div className="popup__content">
        <div className={`popup__body ${customClassName}`}>
          <button className="popup__close-button" onClick={onClose}>
            X
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}
