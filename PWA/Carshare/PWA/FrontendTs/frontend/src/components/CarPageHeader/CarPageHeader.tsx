import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "./CarPageHeader.scss";
import { Fab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Car } from "../../globaltypes";
import OdometerOverlay from "../OdometerOverlay/OdometerOverlay";

interface ICarCardProps {
    car: Car;
    tripStatus: boolean;
}

export default function CarPageHeader({ car, tripStatus }: ICarCardProps) {
    const navigate = useNavigate();

    return (
        <div>
        <div className="header-containerCarPage" id="carPageHeader">
            <div className="backButtonCarPage">
                <KeyboardArrowLeftIcon />
                <p onClick={() => navigate(-1)}>Back</p>
            </div>
            <div className="carImage-containerCarPage">
                <img
                    className="carImageCarPage"
                    alt="carImage"
                    src={"../images/" + car.type.toString() + car.colour + ".png"}
                />
            </div>
            <div className="bottomContainerCarPage">
                <h1 className="carnameCarPage">{car.name}</h1>
                {tripStatus ? (
                    <Fab className="tripButtonCarPage" variant="extended" size="small" color="error" aria-label="add">
                        End trip
                    </Fab>
                ) : (
                    <Fab
                        className="tripButtonCarPage"
                        variant="extended"
                        size="small"
                        color="primary"
                        aria-label="add"
                        // onClick={() => openOrCloseOverlay()}
                    >
                        Start trip
                    </Fab>
                )}
            </div>
        </div>
        </div>
    );
}
