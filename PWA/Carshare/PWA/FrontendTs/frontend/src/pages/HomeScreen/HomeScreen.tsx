import "./HomeScreen.scss";
import CarCard from "../../components/CarCard/CarCard";
import AddCarCard from "../../components/AddCarCard/AddCarCard";
import { useFetchCars } from "../../api/useQueryHooks/carHooks";

const HomeScreen = () => {
    const { data: cars } = useFetchCars();

    return (
        <div className="main-container">
            <div className="flex-containers">
                {cars && cars.map((car) => <CarCard key={car.id} car={car}></CarCard>)}
                <AddCarCard />
                <div style={{ width: "100vw", height: "10px" }} />
            </div>
        </div>
    );
};

export default HomeScreen;
