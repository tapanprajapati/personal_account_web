import LauncherButton from "./LauncherButton";
import "./LauncherScreen.css";
function LaunchScreen(props) {
  return (
    <div className="container">
      <div className="button-container">
        <LauncherButton
          handleClick={() => console.log("Expense Clicked")}
          title="Expense"
          amount="10"
          color="red"
        />
        <LauncherButton
          handleClick={() => console.log("Income Clicked")}
          title="Income"
          amount="10"
          color="green"
        />
        <LauncherButton
          handleClick={() => console.log("Saving Clicked")}
          title="Saving"
          amount="10"
          color="steelblue"
        />
      </div>
    </div>
  );
}

export default LaunchScreen;
