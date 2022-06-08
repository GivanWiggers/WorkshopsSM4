import "./CalendarScreen.scss";
import UserStatsCard from "../../components/UserStatsCard/UserStatsCard";
import { Car, User, CarTypeEnum, Trip, Reservation, Transaction, PercentageUser } from "../../globaltypes";
import UserPageHeader from "../../components/UserPageHeader/UserPageHeader";
import OdometerOverlay from "../../components/OdometerOverlay/OdometerOverlay";
import ReservationCard from "../../components/ReservationCard/ReservationCard";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import BackButton from "../../components/BackButton/BackButton";
import { useParams } from "react-router";
import { useFetchCars } from "../../api/useQueryHooks/carHooks";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CalendarScreen = () => {
    const { data: cars } = useFetchCars();
    const [car, setCar] = useState<Car>();
    const { carId } = useParams<{ carId: string }>();
    
    const [date, setDate] = useState(new Date(Date.now()));
    const [reservationsOpen, setReservations] = useState<Reservation[]>([]);
    

    function getReservationsToDate(date: Date) {
        const newReservations = car?.reservations.filter(
            (x) => new Date(x.startDate).toDateString() == new Date(date).toDateString()
        );
        setReservations(newReservations!);
    }

    useEffect(() => {
        if (cars) {
            setCar(cars?.find((c) => c.id === parseInt(carId || ""))!);
        }
    }, [cars]);

    useEffect(() => {
        if (car) {
            getReservationsToDate(date);
        }
    }, [date, car]);
    

    return (
        <div className="calendarscreen">
            <BackButton/>
                    <div style={{ width: "100vw", height: "50px", backgroundColor:"#2D2F32"}} />
            <div className="calendar-container">
                <h1>{date.getDate()}</h1>
                <Calendar onChange={setDate} value={date} />
            </div>
            
            {reservationsOpen.length > 0 ? (
                <div>
                    {reservationsOpen.map((reservation, i) => {
                        return <ReservationCard reservation={reservation} key={i} />;
                    })}
                </div>
            ) : (
                <div>
                    <div className="reservation-container">
                        <div className="reservation-info">
                            <h1 className="reservation-empty">No reservations found</h1>
                        </div>
                    </div>
                </div>
            )}
            <div>
                <AddCircleIcon className="AddIcon"/>
            </div>
        </div>
    );
};

export default CalendarScreen;
