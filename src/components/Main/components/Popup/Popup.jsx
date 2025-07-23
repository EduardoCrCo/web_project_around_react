import { useEffect } from "react";

export default function Popup(props) {
  const { children, onClose, customClassName } = props;

  const handleEsc = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

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
