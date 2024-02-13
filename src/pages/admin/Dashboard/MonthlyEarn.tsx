import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
const MonthlyEarn = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  useEffect(() => {
    const monthlyEarningsData = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Monthly Earnings",
          data: [
            1800, 2500, 2200, 2300, 2100, 2400, 2800, 3000, 4000, 5000, 6000,
            5000,
          ],
          fill: false,
          borderColor: "rgba(75, 192, 192, 1)",
          tension: 0.1,
        },
      ],
    };

    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: monthlyEarningsData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);
  return (
    <div className="col-md-5 ">
      <div className="card p-2">
        <canvas height={216} ref={chartRef} />
      </div>
    </div>
  );
};

export default MonthlyEarn;