import { Routes as AllRoutes, Route } from "react-router-dom";
import BalanceScreen from "../pages/BalanceScreen/BalanceScreen";
import CalendarScreen from "../pages/CalendarScreen/CalendarScreen";
import HomeScreen from "../pages/HomeScreen/HomeScreen";
import CarScreen from "../pages/CarScreen/CarScreen";
import SafetyScreen from "../pages/SafetyScreen/SafetyScreen";
import StatsScreen from "../pages/StatsScreen/StatsScreen";
import UserScreen from "../pages/UserScreen/UserScreen";
import TripsScreen from "../pages/TripsScreen/TripsScreen";
import AuthScreen from "../pages/AuthScreen/AuthScreen";

export default function Routes() {
    return (
        <AllRoutes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="authscreen" element={<AuthScreen />} />
            <Route path="homescreen" element={<HomeScreen />} />
            <Route path="safetyscreen" element={<SafetyScreen />} />
            <Route path="statsscreen/:carId" element={<StatsScreen />} />
            <Route path="carscreen/:carId" element={<CarScreen />} />
            <Route path="userscreen" element={<UserScreen />} />
            <Route path="balancescreen/:carId" element={<BalanceScreen />} />
            <Route path="calenderscreen/:carId" element={<CalendarScreen />} />
            <Route path="tripsscreen/:carId" element={<TripsScreen />} />
        </AllRoutes>
    );
}
