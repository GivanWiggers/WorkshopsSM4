import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChartComponent.scss";
import DonutChart from "react-donut-chart";
import { Car } from "../../globaltypes";
import { Item } from "react-donut-chart/dist/DonutChart";

interface IChartComponent {
    car: Car;
}
export default function ChartComponent(props: IChartComponent) {
    const navigate = useNavigate();

    const [data] = useState<Item[]>([]);
    const [colours] = useState<string[]>([]);
    const range = props.car.trips.reduce((a, b) => a + b.distance, 0);

    // Sample data
    function createData(car: Car) {
        car.users.forEach((user) => {
            const userRange = car.trips.filter((t) => t.user.id === user.id).reduce((a, b) => a + b.distance, 0);

            data.push({
                label: user.name,
                value: (userRange / range) * 100,
            });
            colours.push(user.colour);
        });
    }

    const reactDonutChartInnerRadius = 0.84;
    //const reactDonutChartSelectedOffset = 0.04;

    let reactDonutChartStrokeColor = "#1A1C1F";

    const options = {
        responsive: true,
        cutoutPercentage: 85,
        maintainAspectRatio: false,
        legend: {
            display: true,
            position: "bottom",
            usePointStyle: "true",
            labels: {
                fontsize: 12,
                padding: 25,
                fontColor: "#ffffff",
                fontFamily: "Inter-bold",
            },
        },
    };
    useEffect(() => {}, [createData(props.car)]);
    return (
        <div className="chart-container">
            <h1 className="kilometersName">Kilometers</h1>
            <div className="donutchart-container">
                <DonutChart
                    className="topChart"
                    width={250}
                    height={250}
                    strokeColor={reactDonutChartStrokeColor}
                    data={data}
                    interactive={false}
                    colors={colours}
                    innerRadius={reactDonutChartInnerRadius}
                    clickToggle={false}
                    legend={false}
                />
                <DonutChart
                    className="bottomChart"
                    width={250}
                    height={250}
                    strokeColor={reactDonutChartStrokeColor}
                    data={data}
                    interactive={false}
                    colors={colours}
                    innerRadius={reactDonutChartInnerRadius}
                    clickToggle={false}
                    legend={false}
                />
                <div className="chart-info">
                    {data.map((item) => {
                        return (
                            <div className="chartInfo-person" key={item.label + item.label}>
                                <div className="tussendiv">
                                    <div
                                        className="chartInfo-colour"
                                        style={{
                                            backgroundColor:
                                                colours[data.findIndex((c) => c.label === item.label)].toString(),
                                        }}
                                    >
                                        <div className="chartInfo-text">
                                            <div style={{ fontSize: "12px" }}>
                                                {Math.round((item.value / 100) * range)}
                                            </div>
                                            <div style={{ fontSize: "8px" }}>{"km"}</div>
                                        </div>
                                    </div>
                                    <div
                                        className="chartInfo-colourBottom"
                                        style={{
                                            backgroundColor:
                                                colours[data.findIndex((c) => c.label === item.label)].toString(),
                                        }}
                                    ></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
