import { useState } from "react";

export default function CashoutCalcStar() {
  const [amount, setAmount] = useState("");
  const rate = 0.0185;

  const parsedAmount = parseFloat(amount);
  const charge = isNaN(parsedAmount)
    ? 0
    : parseFloat((parsedAmount * rate).toFixed(2));
  const total = isNaN(parsedAmount)
    ? 0
    : parseFloat((parsedAmount + charge).toFixed(2));

  return (
    <div
      className="w-11/12 bg-dark px-6 pt-10 pb-8 rounded-2xl shadow-2xl
      flex flex-col gap-12 md:w-7/12 lg:7/12 2xl:w-5/12"
    >
      <h1 className="text-4xl font-bold text-center">
        <span className="underline underline-offset-12 decoration-brand">
          Cashout
        </span>{" "}
        Calc
        <span className="text-brand">*</span>
      </h1>

      <div>
        <label
          htmlFor="amount"
          className="block mb-2 font-medium text-muted-light text-lg"
        >
          Enter Amount:
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-4 rounded-md bg-muted-dark font-bold text-lg text-light border border-gray-600
                    focus:outline-none focus:ring-2 focus:ring-brand"
          placeholder="e.g. 1000"
        />
      </div>

      <div className="text-lg">
        <div className="flex justify-between">
          <span className="text-gray-400 text-base">Cashout Charge</span>
          <span>{charge.toFixed(2)} ৳</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400 text-base">Total Deducted</span>
          <span>{total.toFixed(2)} ৳</span>
        </div>
      </div>

      <p className="text-sm text-gray-500 text-center">
        based on 1.85% bKash rate
      </p>
    </div>
  );
}
