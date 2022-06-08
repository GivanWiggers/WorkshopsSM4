import {} from "@mui/material";
import { Car } from "../../globaltypes";
import "./CarCard.scss";
import { useNavigate } from "react-router-dom";

interface ICarCardProps {
    car: Car;
}

export default function CarCard({ car }: ICarCardProps) {
    const LatestTransaction = car.transactions[car.transactions.length - 1].date;
    const range = car.trips.filter((t) => t.date > LatestTransaction).reduce((a, b) => a + b.distance, 0);
    const navigate = useNavigate();

    return (
        <div className="car-container" onClick={() => navigate(`/carscreen/${car.id}`)}>
            <h1 className="carName">{car.name}</h1>
            <div className="carImage-container">
                <img
                    className="carImage"
                    alt="carImage"
                    src={"images/" + car.type.toString() + car.colour + ".png"}
                ></img>
            </div>
            <h2 className="carRange">
                {range} / {car.maxRange} KM LEFT
            </h2>
            <div className="bottomBar">
                {car.reserved ? (
                    <h2 className="carStatus" style={{ color: "#FFD280" }}>
                        Currently Reserved
                    </h2>
                ) : (
                    <h2 className="carStatus" style={{ color: "#CCFF99" }}>
                        Currently Available
                    </h2>
                )}

                <p className="startTripButton" onClick={() => navigate("/safetyscreen")}>
                    Start trip
                </p>
            </div>
        </div>
    );
}
