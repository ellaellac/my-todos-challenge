import "./Button.scss";

const Button = ({ title, btnFunction, className }) => {
  return (
    <button className={className} onClick={btnFunction}>
      {title}
    </button>
  );
};

export default Button;
