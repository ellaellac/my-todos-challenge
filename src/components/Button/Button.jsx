import "./Button.scss";

const Button = ({ title, btnFunction }) => {
  return <button onClick={btnFunction}>{title}</button>;
};

export default Button;
