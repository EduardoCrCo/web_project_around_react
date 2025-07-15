import Trash from "../../../../images/Trash.svg";
import like from "../../../../images/Group-heart.svg";

export default function Card(props) {
  const likeClassName = `grid-card__button-like-image ${
    props.isLiked ? "grid-card__button-like-image_active" : ""
  }`;

  return (
    <div className="grid-card">
      <button className="grid-card__button-trash" type="button">
        <img
          className="grid-card__button-trash-image"
          src={Trash}
          alt="bote de basura"
        />
      </button>
      <img
        className="grid-card__image"
        src={props.link}
        alt={props.name}
        onClick={props.onCardClick}
      />
      <div className="grid-card__paragraph-and-image">
        <p className="grid-card__paragraph grid-card__paragraph_text_overflow">
          {props.name}
        </p>
        <button className="grid-card__button-like" type="button">
          <img src={like} alt="imagen me-gusta" className={likeClassName} />
        </button>
      </div>
    </div>
  );
}
