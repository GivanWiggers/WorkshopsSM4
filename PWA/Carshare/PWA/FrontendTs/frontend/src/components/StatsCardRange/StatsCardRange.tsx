import Slider from "@mui/material/Slider";
import { useNavigate } from "react-router-dom";
import { Car } from "../../globaltypes";
import "./StatsCardRange.scss"


interface IStatsCardRangeProps{
    car: Car
}

export default function StatsCardRange(props: IStatsCardRangeProps){
  const navigate = useNavigate();
  
  const LatestTransaction = props.car.transactions[props.car.transactions.length - 1].date;
    const range = props.car.trips.filter((t) => t.date > LatestTransaction).reduce((a, b) => a + b.distance, 0);
    return(
        <div className="statsRange-container" >
        <div className="stats-topper">
          <h1 className="stats-title">Stats</h1>  
          <p className="stats-seeall">See all</p>  
        </div>
        <div className="stats-info">
          <div className="stats-rangeslider">
            <h1 className="stats-rangetitle">range </h1>
            <h1 className="stats-rangekm"> {range} km</h1>
          </div>
          <div className="stats-range">
            <div className="sliders">
              <Slider
                disabled
                className="topSlider"
                size="small"
                max={props.car.maxRange}
                defaultValue={range}
                aria-label="Large"
                valueLabelDisplay="auto"
              />
              <Slider
                disabled
                className="bottomSlider"
                size="small"
                max={props.car.maxRange}
                defaultValue={range}
                aria-label="Large"
                valueLabelDisplay="auto"
              />
            </div>
          </div>
          <div className="stats-tank">
          
            <h1 className="stats-name">Tank volume</h1>
            <h1 className="stats-statistics">{props.car.tank} Liter</h1>
          </div>
          <div className="stats-odometer">
            <h1 className="stats-name">Odometer</h1>
            <h1 className="stats-statistics">{props.car.odometer}</h1>
          </div>
        </div>
      </div>
    );  
}