import AccountTypeScreen from "./AccountTypeScreen/AccountTypeScreen";
import "./App.css";
import EntryListScreen from "./EntryListScreen/EntryListScreen";
import LauncherScreen from "./LauncherScreen/LauncherScreen";

function App() {
  return (
    <div className="main-container">
      <div className="title">
        <h1 align="center">Personal Account</h1>
      </div>
      <div className="screen-container">
        <LauncherScreen />
        <AccountTypeScreen />
        <EntryListScreen />
      </div>
    </div>
  );
}

export default App;
