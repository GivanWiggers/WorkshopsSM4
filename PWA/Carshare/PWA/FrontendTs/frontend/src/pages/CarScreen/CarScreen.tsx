import React, { useEffect, useState } from "react";
import "./CarScreen.scss";
import CarStatsCard from "../../components/CarStatsCard/CarStatsCard";
import UserStatsCard from "../../components/UserStatsCard/UserStatsCard";
import CarPageHeader from "../../components/CarPageHeader/CarPageHeader";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import { Car } from "../../globaltypes";
import AverageUseStatsCard from "../../components/AverageUseStatsCard/AverageUseStatsCard";
import { useFetchCars } from "../../api/useQueryHooks/carHooks";
import { useNavigate, useParams } from "react-router";
import StatsCardRange from "../../components/StatsCardRange/StatsCardRange";
import CalendarCard from "../../components/CalendarCard/CalendarCard";
import OdometerOverlay from "../../components/OdometerOverlay/OdometerOverlay";
import ChartComponent from "../../components/ChartComponent/ChartComponent";
import BalanceCard from "../../components/BalanceCard/BalanceCard";
import BackButton from "../../components/BackButton/BackButton";

const CarScreen = () => {
    const { data: cars } = useFetchCars();
    const [car, setCar] = useState<Car>();
    const { carId } = useParams<{ carId: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        if (cars) {
            setCar(cars?.find((c) => c.id === parseInt(carId || ""))!);
        }
    }, [cars]);
    return (
        <div className="main-container">
            {car && (
                <div className="stats-containers">
                    <CarPageHeader car={car} tripStatus={false}/>
                    <div onClick={() => navigate(`/statsscreen/${car.id}`)}>
                    <   StatsCardRange car={car} />
                    </div>
                    {/* <div onClick={() => navigate(`/statsscreen/${car.id}`)}> */}
                        <CalendarCard reservations={car.reservations} id={car.id} />
                    {/* </div> */}
                    <OdometerOverlay car={car}/>
                    <div style={{ width: "100vw", height: "10px" }} />
                </div>
            )}
        </div>
    );
};

export default CarScreen;
