import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  console.log(resultsData);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  console.log(initialInvestment);

  return (
    <table className="w-full md:mx-auto table-auto md:w-10/12 sm:table-fixed mt-3 bg-gradient-to-t from-emerald-200 to-emerald-600">
      <thead>
        <tr className=" bg-slate-300 md:text-lg">
          <th className="py-1 md:py-5">Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody className="text-center p-10">
        {resultsData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;

          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          console.log(totalAmountInvested);

          return (
            <tr className="md:text-lg ">
              <td className="py-1 md:py-3">{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Results;
