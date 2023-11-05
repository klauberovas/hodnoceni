import './style.css';

export const Star = ({ value, onSelect, glowing, onRating }) => {
  const handlerClick = () => {
    onSelect(value);
    onRating(value);
  };

  const starClass = glowing ? 'rating__star rating__star--on' : 'rating__star';

  return <div onClick={handlerClick} className={starClass}></div>;
};
