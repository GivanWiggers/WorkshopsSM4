import { useNavigate } from "react-router-dom";
import { Car, User } from "../../globaltypes";
import AvatarCustom from "./../Avatar/Avatar";
import "./AverageUseStatsCard.scss";

interface IAverageUseStatsCardProps {
    car: Car;
}

export default function AverageUseStatsCard({ car }: IAverageUseStatsCardProps) {
    function getPercentage(user: User): number {
        const range = car.trips.reduce((a, b) => a + b.distance, 0);
        var userRange = car.trips.filter((t) => t.user.id === user.id).reduce((a, b) => a + b.distance, 0);
        return (userRange / range) * 100;
    }

    const navigate = useNavigate();
    return (
        <div className="averageUseStats-container">
            <div className="averageUseStats-topper">
                <h1 className="averageUseStats-title">Average use per person</h1>
            </div>
            <div className="averageUseStats-people">
                {car.users.map((user, i) => {
                    return (
                        <div className="averageUseStats-person" key={user.id}>
                            <AvatarCustom className={user.name} name={user.name} colour={user.colour} />
                            <h1 className="averageUseStats-name">{user.name}</h1>
                            <h1 className="averageUseStats-statistics">{Math.round(getPercentage(user))}%</h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
