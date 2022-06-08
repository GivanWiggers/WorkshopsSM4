import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Car, Trip} from "../../globaltypes";
import BackButton from "../../components/BackButton/BackButton";
import TripCard from "../../components/TripCard/TripCard";
import { useFetchCars } from "../../api/useQueryHooks/carHooks";

const TripsScreen = () => {
    const { data: cars } = useFetchCars();
    const [car, setCar] = useState<Car>();
    const { carId } = useParams<{ carId: string }>();

    useEffect(() => {
        if (cars) {
            setCar(cars?.find((c) => c.id === parseInt(carId || ""))!);
        }
    }, [cars]);

    return (
        <div className="main-container" style={{ justifyContent: "flex-start" }}>
            <BackButton />
            <div style={{ height: "50px" }}></div>
                <div>
                    {car?.trips.map((Trips, i) => {
                        return <TripCard Trip={Trips} key={i} />;
                    })}
                </div>
                <div style={{ height: "10px" }}></div>
        </div>
    );
};

export default TripsScreen;
