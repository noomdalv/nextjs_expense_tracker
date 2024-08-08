"use server";

import { text } from "stream/consumers";

interface TransactionData {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

async function addTransaction(formData: FormData): Promise<TransactionResult> {
  const textValue = formData.get("text");
  const amountValue = formData.get("amount");

  if (!textValue || textValue === "" || !amountValue) {
    return { error: "Text or Amount is missing" };
  }

  const text: string = textValue.toString();
  const amount: number = parseFloat(amountValue.toString());

  const transactionData: TransactionData = {
    text,
    amount,
  };

  return { data: transactionData };
}

export default addTransaction;
