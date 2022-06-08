import { useNavigate } from "react-router-dom";
import { Car, User } from "../../globaltypes";
import AvatarCustom from "./../Avatar/Avatar";
import "./BalanceCard.scss";

interface IBalanceProps {
    car: Car;
}

export default function BalanceCard(props: IBalanceProps) {
        function getbalance(user: User){
            var total = 0
            const transactions_user = props.car.transactions.filter(x => x.user.id == user.id)
            transactions_user.map((transaction) => {
                return(
                    total += transaction.amount
                    )
            })        
            return total
        }
        function getColor(user:User) {
            var color = "white_Balance"
            if (getbalance(user) > 0){
                 color = "green_Balance"
            }
            else if (getbalance(user) < 0){
                 color = "red_Balance"
            }
            return color;
            }
            
    const navigate = useNavigate();
    return (
        <div className="balance-container">
            <div className="balance-topper">
                <h1 className="balance-title">Balance</h1>
            </div>
            <div className="balance-people">
                {props.car.users.map((user) => {
                    return (
                        <div className="balance-person">
                            <AvatarCustom className={user.name} name={user.name} colour={user.colour} />
                            <h1 className="balance-name">{user.name}</h1>
                            <h1 className={getColor(user)} >€{Math.round((getbalance(user)*100))/100}</h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
