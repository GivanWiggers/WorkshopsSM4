import { useQuery } from "react-query";
import BackendApi from "../BackendApi";

export const useFetchCars = () => {
    return useQuery("cars", BackendApi.getCars)
}