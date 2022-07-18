import * as React from "react";
import AddTransaction from "../AddTransaction/AddTransaction";
import BankActivity from "../BankActivity/BankActivity";
import "./Home.css";
import axios from "axios";

export default function Home(props) {
  function handleOnSubmitNewTransaction(form) {
    props.setNewTransactionForm(form);
  }

  function filterTransactions(key) {
    var resp = [];
    if (props.transactions == null) return;
    props.transactions.forEach((item) => {
      if (item.description.toLowerCase().includes(key.toLowerCase())) {
        resp = [...resp, item];
      }
    });

    return resp;
  }

  function findError() {
    if (props.error == null) {
      return (
        <BankActivity
          transactions={
            props.filterInputValue != ""
              ? filterTransactions(props.filterInputValue)
              : props.transactions
          }
        />
      );
    } else {
      return <h2 className="error">Something went wrong :</h2>;
    }
  }

  const handleOnCreateTransaction = async () => {
    props.setIsCreating(true);
    try {
      let response = await axios.post(
        "http://localhost:3001/bank/transactions",
        ...props.newTransactionForm
      );
      let responseData = response.data.transaction;

      props.setTransactions(props.transactions.push(responseData));
      props.setNewTransactionForm({
        category: "",
        description: "",
        amount: 0,
      });
    } catch (error) {
      props.setError(error);
      props.setIsCreating(false);
    }

    props.setIsCreating(false);
  };

  const URL = "http://localhost:3001";
  React.useEffect(() => {
    props.setIsLoading(true);
    let newURL = URL + "/bank/transactions";
    axios
      .get(newURL)
      .then((resp) => {
        props.setTransactions(resp.transactions);
      })
      .catch((err) => setError(1));

    newURL = URL + "/bank/transfers";
    axios
      .get(newURL)
      .then((resp) => {
        props.setTransfers(resp.transfers);
      })
      .catch((err) => setError(1));

    props.setIsLoading(false);
  }, []);

  return (
    <div className="home">
      <AddTransaction
        isCreating={props.isCreating}
        setIsCreating={props.setIsCreating}
        newTransactionForm={props.newTransactionForm}
        setNewTransactionForm={props.setNewTransactionForm}
        form={props.newTransactionForm}
        setForm={props.setNewTransactionForm}
        handleOnSubmit={handleOnSubmitNewTransaction}
      />
      {props.isLoading ? <h1>Loading...</h1> : findError()}
    </div>
  );
}
