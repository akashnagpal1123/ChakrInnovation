import React, { useState, useEffect } from "react";
// import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
// import { Box, Typography } from "@mui/material";
// import styled from 'styled-components';
// import frame from "../../Assests/Avatar (1).png";
// import frame1 from "../../Assests/Avatar (2).png";
// import frame2 from "../../Assests/Avatar (3).png";
// import frame3 from "../../Assests/Avatar (4).png";
// import frame4 from "../../Assests/Avatar (5).png";
// import frame5 from "../../Assests/Avatar (6).png";
// import frame6 from "../../Assests/Avatar.png";
// import avatar from "../../Assests/Frame 31.png";
// import avatar1 from "../../Assests/Frame 32.png";
// import avatar2 from "../../Assests/Frame 33.png";
// import avatar3 from "../../Assests/Frame 34.png";
// import avatar4 from "../../Assests/Frame 35.png";
// import avatar5 from "../../Assests/Frame 36.png";
// import avatar6 from "../../Assests/Frame 37.png";
// import avatar7 from "../../Assests/Frame 38.png";
// import bar from "../../Assests/Bar (2).png";
// import bar1 from "../../Assests/Bar (1).png";
// import bar2 from "../../Assests/Bar (3).png";
// import bar3 from "../../Assests/Bar.pneg";
// import year from "../../Assests/Frame 5.png";
// import line from "../../Assests/Line 2.svg";
// import year1 from "../../Assests/Frame 5.svg";
import axios from "axios";
import {
    ArcElement,
    Chart as ChartJS,
    Legend,
    Tooltip,
    Title,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
} from "chart.js";

ChartJS.register(
    Title,
    Tooltip,
    LineElement,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
    ArcElement
);

const GrowthBody = () => {
    const [revenueGrowthPercentage, setRevenueGrowthPercentage] = useState(null);
    const [revenue, setRevenue] = useState([]);

    const [data1, setData1] = useState({
        labels: ["2016", "2017", "2018", "2019"],
        datasets: [
            {
                label: "First Dataset",
                data: [92, 26, 75, 42],
                backgroundColor: "#25CD2566",
                borderColor: "#25CD2566, #25CD2500",
                tension: 0.4,
                fill: true,
                pointStyle: "rect",
                pointBorderColor: "blue",
                pointBackgroundColor: "#fff",
                showLine: true,
            },
        ],
    });
    const gradient = () => {
        const chartCanvas = document.getElementById("yourChartId");

        if (chartCanvas) {
            const ctx = chartCanvas.getContext("2d");
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, "rgba(37, 205, 37, 0.4)");
            gradient.addColorStop(1, "rgba(37, 205, 37, 0.00)");
            return gradient;
        }

        // Handle the case where the canvas element is not found
        return "rgba(37, 205, 37, 0.4)"; // or any default value
    };

    useEffect(() => {
        // Set custom CSS variables
        document.documentElement.style.setProperty("--Light-Green", "#25CD25");
    }, []);

    const data = {
        labels: ["Revenue Growth", "Remaining"],
        datasets: [
            {
                lebal: "Revenue Growth",
                data: [revenueGrowthPercentage, 100 - revenueGrowthPercentage],
                backgroundColor: ["#FFCD71", "#FFF7E8"],
                borderColor: ["#FFCD71", "#FFF7E8"],
                circumference: 180,
                rotation: 270,
            },
        ],
    };

    useEffect(() => {
        axios.get("https://chakr.onrender.com/api/downsampled").then((res) => {
            setRevenue(res.data.downsampledData);
        });
    }, []);

    useEffect(() => {
        // Calculate the revenue growth percentage
        const startYear = 2017;
        const endYear = 2016;

        const startData = revenue.find((entry) =>
            entry.Timestamp.includes(`${startYear}`)
        );
        const endData = revenue.find((entry) =>
            entry.Timestamp.includes(`${endYear}`)
        );

        if (startData && endData) {
            const growthPercentage =
                ((endData.ProfitPercentage - startData.ProfitPercentage) /
                    startData.ProfitPercentage) *
                100;

            setRevenueGrowthPercentage(growthPercentage.toFixed(2));
        }
    }, [revenue]);





    return (

        <div  className="flex flex-col m-3 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] px-10 py-3">
            <div className="w-6/12 flex-shrink-0">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-5">Growth</h1>
                </div>
            <div>
                <div
                    style={{
                        display: "flex",
                        gap: "280px",

                    }}
                >
                    {/* <Typography
                        style={{
                            color: "var(--Black, #131313)",
                            fontFamily: "Inter",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: " 600",
                            lineHeight: "normal",
                            letterSpacing: "-0.2px",
                        }}
                    >
                        Growth
                    </Typography> */}
                    <div
                        style={{
                            alignItems: "flex-start",
                            gap: "36px",
                        }}
                    >
                        {/* <img src={year1} alt="Image Description" />{" "} */}
                    </div>
                </div>
                <div height="200px">
                    <Line
                        id="yourChartId"
                        data={data1}
                        options={{
                            cutout: "1000%",
                            maintainAspectRatio: false,
                            elements: {
                                line: {
                                    borderColor: "var(--Light-Green)",
                                    borderWidth: 1,
                                    background: gradient(),
                                },
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default GrowthBody;