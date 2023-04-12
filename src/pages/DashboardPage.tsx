import React from "react";
import { Chart } from "react-google-charts";
import { useAppSelector } from "hooks/redux-hooks";

export const data = [
  ["Category", "Total"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "My Expenses",
};

function DashboardPage() {
  const expenses = useAppSelector((state) => state.expenses);

  //write code to get  category and summ data from expenses and put it into data array

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}

export default DashboardPage;
