import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const monthlyRevenueData = [
  { month: "Jan", feesCollected: 5000, pending: 1000, expenses: 3000 },
  { month: "Feb", feesCollected: 4500, pending: 1500, expenses: 2500 },
  { month: "Mar", feesCollected: 6000, pending: 800, expenses: 4000 },
  { month: "Apr", feesCollected: 7000, pending: 1200, expenses: 3500 },
  { month: "May", feesCollected: 6500, pending: 500, expenses: 3000 },
  { month: "Jun", feesCollected: 8000, pending: 2000, expenses: 4000 },
];

function MonthlyRevenueChart() {
  return (
    <div style={{ width: "100%", height: "400px", display: "flex", flexDirection: "column" }}>
  <ResponsiveContainer width="100%" height="85%"> 
    <BarChart
      data={monthlyRevenueData}
      margin={{ top: 20, bottom: 5 }}
      className="p-3"
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="feesCollected" fill="#38abb8" radius={[4,4,0,0]} />
      <Bar dataKey="pending" fill="#FF7A00" radius={[4,4,0,0]} />
      <Bar dataKey="expenses" fill="#FF3B3F" radius={[4,4,0,0]} />
    </BarChart>
  </ResponsiveContainer>

  {/* Separate legend below the chart */}
  <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "10px" }}>
    <div style={{ margin: "0 10px", display: "flex", alignItems: "center" }}>
      <span style={{ display: "inline-block", width: "12px", height: "12px", backgroundColor: "#38abb8", marginRight: "5px" }}></span>
      Fees Collected
    </div>
    <div style={{ margin: "0 10px", display: "flex", alignItems: "center" }}>
      <span style={{ display: "inline-block", width: "12px", height: "12px", backgroundColor: "#FF7A00", marginRight: "5px" }}></span>
      Pending
    </div>
    <div style={{ margin: "0 10px", display: "flex", alignItems: "center" }}>
      <span style={{ display: "inline-block", width: "12px", height: "12px", backgroundColor: "#FF3B3F", marginRight: "5px" }}></span>
      Expenses
    </div>
  </div>
</div>

  );
}

export default MonthlyRevenueChart;
