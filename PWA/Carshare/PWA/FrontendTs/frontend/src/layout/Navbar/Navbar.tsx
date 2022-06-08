import { Suspense } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import PageLoader from "../PageLoader";
import "./Navbar.scss";
import {FaCar} from 'react-icons/fa'
import PersonIcon from "@mui/icons-material/Person";

export default function Navbar() {
    return (
        <Suspense fallback={<PageLoader />}>
            <nav>
                <NavbarRedirects />
                {/* <NavbarUserSection /> */}
            </nav>
        </Suspense>
    );
}

function NavbarRedirects() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    //const history = useHistory();

    return (
        <section>
            
            {/* <p className={pathname === "/menu" ? "bold-text" : ""} onClick={() => history.push("menu")}>
                Home
            </p> */}
            <div className="HomeNavBar" onClick={() => navigate('/homescreen')}>
            <FaCar/>
                <p className={pathname === "/homescreen" ? "bold-text" : ""} >Home</p>
            </div>
            <div className="HomeNavBar" onClick={() => navigate('/userscreen')}>
                <PersonIcon/>
                <p className={pathname === "/userscreen" ? "bold-text" : ""} >User</p>
            </div>
        </section>
    );
}

// function NavbarUserSection() {
//     //const history = useHistory();
//     return (
//         null
//     );
// }