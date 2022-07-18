import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransactionDetail from "../TransactionDetail/TransactionDetail";


export default function App() {
  // default state handlers
  const [isLoading, setIsLoading] = React.useState(false);
  const [transactions, setTransactions] = React.useState([]);
  const [transfers, setTransfers] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [filterInputValue, setFilterInputValue] = React.useState("");
  const [newTransactionForm, setNewTransactionForm] = React.useState({
		category: "",
		description: "",
		amount: 0,
	});
	const [isCreating, setIsCreating] = React.useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          filterInputValue={filterInputValue}
          setFilterInputValue={setFilterInputValue}
        />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  isLoading={isLoading}
                  setIsLoading={setIsLoading}
                  transactions={transactions}
                  setTransactions={setTransactions}
                  transfers={transfers}
                  setTransfers={setTransfers}
                  error={error}
                  setError={setError}
                  filterInputValue={filterInputValue}
                  newTransactionForm={newTransactionForm}
                  setNewTransactionForm={setNewTransactionForm}
                  isCreating={isCreating}
                  setIsCreating={setIsCreating}
                />
              }
            ></Route>
            <Route
              path="/transactions/:transactionId"
              element={<TransactionDetail />}
            ></Route>
            <Route></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
