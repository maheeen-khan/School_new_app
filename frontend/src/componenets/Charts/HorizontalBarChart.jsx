import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Maths", value: 70 },
  { name: "English", value: 110 },
  { name: "Chemistry", value: 90 },
  { name: "Physics", value: 30 },
  { name: "Urdu", value: 60 },
  { name: "Islamiat", value: 100 }
];

function HorizontalBarChart() {
  // Get screen width for responsive adjustments
  const screenWidth = window.innerWidth;

  // Dynamic values for small screens
  const yAxisWidth = screenWidth < 576 ? 60 : 100;
  const fontSize = screenWidth < 576 ? 10 : 14;
  const marginLeft = screenWidth < 576 ? 10 : 20;
  const marginRight = screenWidth < 576 ? 10 : 20;
  const chartHeight = screenWidth < 576 ? 200 : 260;
  const selectWidth = screenWidth < 576 ? "120px" : "150px";

  return (
    <section className="py-3">
      <div className="card widget-card border-light shadow-sm">
        <div
          className="card-body p-4"
          style={{ padding: screenWidth < 576 ? "10px" : "16px" }}
        >

          {/* HEADER */}
          <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
            <h5 className="card-title mb-2" style={{ fontSize: fontSize + 2 }}>
              Teachers By Subjects
            </h5>

            {/* Responsive select instead of button */}
            <select
              className="form-select text-secondary border-light-subtle mb-2 mb-sm-0"
              style={{ width: selectWidth, fontSize }}
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>

          {/* RESPONSIVE CHART */}
          <div style={{ width: "100%", height: chartHeight }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={data}
                margin={{
                  top: 10,
                  right: marginRight,
                  left: marginLeft,
                  bottom: 10
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={yAxisWidth}
                  tick={{ fontSize }}
                />
                <Tooltip />
                <Bar dataKey="value" fill="#FF7A00" radius={[5, 5, 5, 5]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HorizontalBarChart;
