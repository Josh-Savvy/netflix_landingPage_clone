const Button = ({title, btnStyle, Click}) => {
  return <button onClick={Click} style={btnStyle}>{title}</button>;
};

export default Button;
