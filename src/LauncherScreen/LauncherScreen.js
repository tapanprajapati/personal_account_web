import LauncherButton from "./LauncherButton";
import "./LauncherScreen.css";
function LaunchScreen(props) {
  const expense = "Expense";
  const income = "Income";
  const saving = "Saving";

  return (
    <div className="container">
      <div className="button-container">
        <LauncherButton
          handleClick={() => props.updateAccountType(expense)}
          title="Expense"
          amount="10"
          color="red"
        />
        <LauncherButton
          handleClick={() => props.updateAccountType(income)}
          title="Income"
          amount="10"
          color="green"
        />
        <LauncherButton
          handleClick={() => props.updateAccountType(saving)}
          title="Saving"
          amount="10"
          color="steelblue"
        />
      </div>
    </div>
  );
}

export default LaunchScreen;
