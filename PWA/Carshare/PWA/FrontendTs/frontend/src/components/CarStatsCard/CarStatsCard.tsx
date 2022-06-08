import { useNavigate } from "react-router-dom";
import "./CarStatsCard.scss"


interface ICarStatsCardProps{
    range: number;
    volume: number;
    odometer: number;
    consumption: string;
}

export default function CarStatsCard(props: ICarStatsCardProps){
    const navigate = useNavigate();
    return(
        <div className="stats-container">
        <div className="stats-topper">
          <h1 className="stats-title">Stats</h1>  
          <p className="stats-seeall" onClick={() => navigate('/statsscreen')}>See all</p>  
        </div>
        <div className="stats-info">
          <div className="stats-range">
            <h1 className="stats-name">Avg. range per tank</h1>
            <h1 className="stats-statistics">{props.range}km</h1>
          </div>
          <div className="stats-tank">
            <h1 className="stats-name">Tank volume</h1>
            <h1 className="stats-statistics">{props.volume} Liters</h1>
          </div>
          <div className="stats-tank">
            <h1 className="stats-name">Odometer</h1>
            <h1 className="stats-statistics">{props.odometer}</h1>
          </div>
          <div className="stats-tank">
            <h1 className="stats-name">Avg. fuel consumption</h1> 
            <h1 className="stats-statistics">{props.consumption}</h1> 
          </div>
        </div>
      </div>
    );  
}