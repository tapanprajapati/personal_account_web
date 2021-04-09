import { useState } from "react";
import AccountTypeScreen from "./AccountTypeScreen/AccountTypeScreen";
import "./App.css";
import EntryListScreen from "./EntryListScreen/EntryListScreen";
import LauncherScreen from "./LauncherScreen/LauncherScreen";

function App() {
  const expense = "Expense";

  const [entryType, setEntryType] = useState(expense);

  let changeEntryType = (type) => {
    setEntryType(type);
  };
  return (
    <div className="main-container">
      <div className="title">
        <h1 align="center">Personal Account</h1>
      </div>
      <div className="screen-container">
        <LauncherScreen updateAccountType={changeEntryType} />
        <AccountTypeScreen type={entryType} />
        <EntryListScreen />
      </div>
    </div>
  );
}

export default App;
