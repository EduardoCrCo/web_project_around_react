import Logo from "../../images/logo.svg";
import Line from "../../images/Line.svg";

export default function Header() {
  return (
    <header className="header">
      <img
        src={Logo}
        alt="imagen vectorial de encabezado"
        className="header__image"
      />
      <img src={Line} alt="Line" className="header__image-line" />
    </header>
  );
}
