import React, { useState } from "react";

function UserInput({ onChangeInput, userInput }) {
  return (
    <section className="w-full font-poppins h-auto sm:w-8/12 md:text-lg mx-auto  p-5 flex justify-center items-center bg-gradient-to-bl from-emerald-200 to-emerald-500">
      <div className="flex flex-col gap-y-5 w-full">
        <div className="flex justify-around  w-full">
          <p className="flex  flex-col ">
            <label>Initial Investment:</label>
            <input
              required
              value={userInput.initialInvestment}
              onChange={(e) =>
                onChangeInput("initialInvestment", e.target.value)
              }
              type="number"
              className="border w-32 p-1 rounded-md"
            />
          </p>
          <p className="flex flex-col ">
            <label>Annual Investment:</label>
            <input
              required
              value={userInput.annualInvestment}
              onChange={(e) =>
                onChangeInput("annualInvestment", e.target.value)
              }
              type="number"
              className="border w-32 p-1 rounded-md"
            />
          </p>
        </div>
        <div className="flex justify-around  w-full">
          <p className="flex flex-col ">
            <label>Expected Return(%):</label>
            <input
              required
              value={userInput.expectedReturn}
              onChange={(e) => onChangeInput("expectedReturn", e.target.value)}
              type="number"
              className="border w-32 p-1 rounded-md"
            />
          </p>
          <p className="flex  flex-col ">
            <label>Duration:</label>
            <input
              required
              value={userInput.duration}
              onChange={(e) => onChangeInput("duration", e.target.value)}
              type="number"
              className="border w-32 p-1 rounded-md"
            />
          </p>
        </div>
      </div>
    </section>
  );
}

export default UserInput;
