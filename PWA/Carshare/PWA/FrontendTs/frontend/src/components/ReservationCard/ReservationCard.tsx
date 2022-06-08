import moment from "moment";
import { useEffect, useState } from "react";
import { arrayBuffer } from "stream/consumers";
import { Car, Reservation } from "../../globaltypes";
import AvatarCustom from "../Avatar/Avatar";
import "./ReservationCard.scss"


interface IReservationCardProps{
    reservation: Reservation
}

export default function ReservationCard(props: IReservationCardProps){    
    return(
        <div>
            <div className="reservation-container">
                <div className="reservation-info">
                  <h1 className="reservation-date">{moment(props.reservation.startDate).format('LT') + " - " + moment(props.reservation.endDate).format('LT')}</h1>
                  <div className="reservation-avatar">
                  <AvatarCustom  name={props.reservation.user.name} colour={props.reservation.user.colour}/>
                  </div>
                </div>
            </div>
      </div>
    );  
}