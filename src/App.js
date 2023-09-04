import "./App.css";
import {
  Header,
  Balance,
  IncomeExpenses,
  TransactionList,
  AddTransaction,
} from "./components/index.js";
import { GlobalProvider } from "./context/GlobalState.js";

function App() {
  return (
    <GlobalProvider>
      <Header title="PocketWatch™" />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
