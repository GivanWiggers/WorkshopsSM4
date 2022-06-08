import moment from "moment";
import { useEffect, useState } from "react";
import { arrayBuffer } from "stream/consumers";
import { Car, Trip} from "../../globaltypes";
import AvatarCustom from "../Avatar/Avatar";
import "./TripCard.scss"


interface ITripCardProps{
    Trip: Trip;
}

export default function TripCard(props: ITripCardProps){    
    return(
       
        <div>
            <div className="Trip-container">
                <div className="Trip-info">
                    <h1 className="Trip-date"><div style={{ display: "flex" }}>
                                            <div style={{ fontFamily: "Inter-semibold" }}>
                                                {moment(props.Trip.date).format("D").toUpperCase()}{" "}
                                            </div>
                                            &nbsp;
                                            <div style={{ fontFamily: "Inter-medium" }}>
                                                {moment(props.Trip.date).format("MMM").toUpperCase()}{" "}
                                            </div>
                                            &nbsp;
                                            <div style={{ fontFamily: "Inter-regular" }}>
                                                {moment(props.Trip.date).format("YYYY").toUpperCase()}
                                            </div>
                                        </div></h1>
                    <h2 className="Trip-time">{moment(props.Trip.date).format('HH:mm')}</h2>
                    <h3 className="Trip-distance"><span className="distance">Distance </span>{props.Trip.distance} km</h3>
                </div>
                <div className="Trip-avatar">
                    <AvatarCustom  name={props.Trip.user.name} colour={props.Trip.user.colour}/>
                    </div>
            </div>
      </div>
    ); 
}