import "./UserStatsCard.scss"


interface IUserStatsCardProps{
    driven: number;
    paid: number;
}

export default function UserStatsCard(props: IUserStatsCardProps){
    return(
        <div className="Userstats-container">
        <div className="stats-topper">
          <h1 className="stats-title">Stats</h1>  
          <p className="stats-seeall">See all</p>  
        </div>
        <div className="stats-info">
          <div className="stats-range">
            <h1 className="stats-name">Kilometers driven</h1>
            <h1 className="stats-statistics">{props.driven} km</h1>
          </div>
          <div className="stats-tank">
            <h1 className="stats-name">Money paid</h1>
            <h1 className="stats-statistics">€{props.paid}</h1>
          </div>
        </div>
      </div>
    );  
}