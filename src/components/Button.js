const Button = ({ bcolor, text, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bcolor,
        color: color,
      }}
      className="btn"
    >
      {text}
    </button>
  );
};

export default Button;
