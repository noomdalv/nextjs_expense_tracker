"use client";

import React from "react";

const AddTransaction = () => {
  const clientAction = async (formData: FormData) => {};

  return (
    <>
      <h3>AddTransaction</h3>
      <form action={clientAction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount..."
            step="0.01"
          />
        </div>
        <button type="submit" className="btn">
          Add Transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
