import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import DonutChart from "react-donut-chart";
import ChartComponent from "../../components/ChartComponent/ChartComponent";
import { Car, CarTypeEnum, PercentageUser, Reservation, Transaction, Trip, User } from "../../globaltypes";
import BackButton from "../../components/BackButton/BackButton";
import AverageUseStatsCard from "../../components/AverageUseStatsCard/AverageUseStatsCard";
import { useFetchCars } from "../../api/useQueryHooks/carHooks";
import BalanceCard from "../../components/BalanceCard/BalanceCard";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import AddTransactionCard from "../../components/AddTransactionCard/AddTransactionCard";

const BalanceScreen = () => {
    const { data: cars } = useFetchCars();
    const [car, setCar] = useState<Car>();
    const { carId } = useParams<{ carId: string }>();

    useEffect(() => {
        if (cars) {
            setCar(cars?.find((c) => c.id === parseInt(carId || ""))!);
        }
    }, [cars]);
    return (
        <div className="main-container">
            {car && (
                <div className="stats-containers">
                    <BackButton/>
                    <div style={{ width: "100vw", height: "50px" }} />
                    <BalanceCard car={car}/>
                    <TransactionCard transactions={car.transactions} />
                    <div style={{ width: "100vw", height: "10px" }} />
                    <AddTransactionCard/>
                    <div style={{ width: "100vw", height: "10px" }} />
                </div>
            )}
        </div>
    );
};

export default BalanceScreen;
