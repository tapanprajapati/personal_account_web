import "./LauncherButton.css";
function LauncherButton(props) {
  return (
    <div
      style={{ backgroundColor: props.color }}
      className="launcher-button-container"
      onClick={props.handleClick}
    >
      <p className="button-title">{props.title}</p>
      <p className="button-secondary-text">Total: $ {props.amount}</p>
    </div>
  );
}

export default LauncherButton;
