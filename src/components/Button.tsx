import "../styles/Button.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  backgroundColor?: string;
  width: string;
  color?: string;
}
function Button(props: ButtonProps) {
  return (
    <button
      className="btn"
      //   add style attribute on checking if props are passed
      {...(props.backgroundColor &&
        props.color && {
          style: {
            backgroundColor: props.backgroundColor,
            color: props.color,
            width: props.width,
          },
        })}
    >
      {props.text}
    </button>
  );
}
export default Button;
