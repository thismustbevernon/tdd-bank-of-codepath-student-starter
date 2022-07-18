import * as React from "react";
import { axios } from "axios";
import "./AddTransaction.css";

export default function AddTransaction(props) {
  const handleOnFormFieldChange = (change) => {
    var val = change.target;
    props.setForm({ ...props.form, [val.name]: val.value });
  };

  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>

      <AddTransactionForm
        handleOnSubmit={props.handleOnSubmit}
        handleOnFormFieldChange={handleOnFormFieldChange}
        isCreating={props.isCreating}
        form={props.form}
      />
    </div>
  );
}

export function AddTransactionForm(props) {
  return (
    <div className="form">
      <div className="fields">
        <div className="field">
          <label>Description</label>
          <input
            name="description"
            type="text"
            value={props.form ? props.form.description : ""}
            onChange={props.handleOnFormFieldChange}
          />
        </div>
        <div className="field">
          <label>Category</label>
          <input
            name="category"
            type="text"
            value={props.form ? props.form.category : ""}
            onChange={props.handleOnFormFieldChange}
          />
        </div>
        <div className="field half-flex">
          <label>Amount (cents)</label>
          <input
            name="amount"
            type="number"
            value={props.form ? props.form.amount : 0}
            onChange={props.handleOnFormFieldChange}
          />
        </div>

        <button
          className="btn add-transaction"
          type="submit"
          onClick={props.handleOnSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
}
