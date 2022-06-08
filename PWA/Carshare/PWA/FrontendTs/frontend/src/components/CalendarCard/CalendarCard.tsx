import { cardMediaClasses } from "@mui/material";
import moment, { utc } from "moment";
import { useNavigate } from "react-router-dom";
import { Car, User, Reservation } from "../../globaltypes";
import AvatarCustom from "../Avatar/Avatar";
import "./CalendarCard.scss";

interface ICalendarProps {
    reservations: Reservation[];
    id?: number;
}

export default function CalendarCard({ reservations, id }: ICalendarProps) {
    const navigate = useNavigate()
    function getReservations(startDate: Date) {
        const date_reservations = reservations.filter(
            (x) => moment(x.startDate).format("DD-MM-YY") === moment(startDate).format("DD-MM-YY")
        );
        return date_reservations;
    }

    const date = new Date();
    var newCar: Reservation[] = reservations.filter(
        (x) => moment(x.startDate.toLocaleString()).format("DD-MM-YY") >= moment(date).format("DD-MM-YY")
    );

    function getDates(): Date[] {
        let newCar2: String[] = [];
        let newCar3: Date[] = [];
        newCar.forEach((car) => {
            if (!newCar2.includes(moment(car.startDate).format("DD-MM-YY"))) {
                newCar2.push(moment(car.startDate).format("DD-MM-YY"));
                newCar3.push(car.startDate);
            }
        });
        console.log(newCar2);
        return newCar3;
    }

    return (
        <div className="calendarcard-container" onClick={() => navigate(`/calendarscreen/${id}`)}>
            <h1 className="calendarcard-title">Calendar</h1>
            {getDates()
                .slice(0, 3)
                .map((reservation) => (
                    <div className="calendarcard-date">
                        <div className="date-title">
                            <h2 className="date">
                                {
                                    <div style={{ display: "flex" }}>
                                        <div style={{ fontFamily: "Inter-semibold" }}>
                                            {moment(reservation).format("D").toUpperCase()}{" "}
                                        </div>
                                        &nbsp;
                                        <div style={{ fontFamily: "Inter-medium" }}>
                                            {moment(reservation).format("MMM").toUpperCase()}{" "}
                                        </div>
                                        &nbsp;
                                        <div style={{ fontFamily: "Inter-regular" }}>
                                            {moment(reservation).format("YYYY").toUpperCase()}
                                        </div>
                                    </div>
                                }
                            </h2>
                        </div>

                        {getReservations(reservation).map((reservation) => (
                            <div key={reservation.id}>
                                <div className="calendarcard-person">
                                    <AvatarCustom
                                        className={reservation.user.name}
                                        name={reservation.user.name}
                                        colour={reservation.user.colour}
                                        size={29}
                                        fontSize={13}
                                    />
                                    <h1 className="calendarcard-name">
                                        {moment(reservation.startDate).format("HH:mm")}&nbsp;-&nbsp;
                                        {moment(reservation.endDate).format("HH:mm")}
                                    </h1>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    );
}
