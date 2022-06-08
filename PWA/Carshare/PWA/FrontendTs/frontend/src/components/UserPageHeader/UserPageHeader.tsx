import AvatarCustom from "./../Avatar/Avatar";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import "./UserPageHeader.scss";
import { useNavigate } from "react-router";

interface IUserCardProps {
    name: string;
    colour: string;
}

export default function UserPageHeader(props: IUserCardProps) {
    const navigate = useNavigate();
    return (
        <div className="user-container">
            <div className="backButton">
                <KeyboardArrowLeftIcon />
                <p onClick={() => navigate(-1)}>Back</p>
            </div>
            <div className="avatarImage-container">
                <AvatarCustom className="avatar" name={props.name} colour={props.colour} size={128} fontSize={48} />
            </div>
            <h1 className="username">{props.name}</h1>
        </div>
    );
}
