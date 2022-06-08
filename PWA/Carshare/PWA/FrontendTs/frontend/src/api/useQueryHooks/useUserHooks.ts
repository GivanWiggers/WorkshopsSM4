
import { useQuery } from "react-query";
import BackendApi from "../BackendApi";

export const useFetchUser = () => {
    return useQuery("user", BackendApi.getUser)
}