import axios, { AxiosResponse } from "axios";
import { Car, User } from "../globaltypes";

let Connectionstring = "http://localhost:5200/graphql"

export default class BackendApi{
    
    static getUser = async() => {
        const res: AxiosResponse<any> = await axios.post(Connectionstring, {
            query: `{
                user{
                  id
                  name
                  colour
                }
              }`
          }, {
              headers: {
                'Content-Type': 'application/json'
              }
            })

        return res.data.data.user as User
    }

    static getCars = async() => {
        const res: AxiosResponse<any> = await axios.post(Connectionstring, {
            query: `{
                cars{
                    id
                    name
                    colour
                    type
                    odometer
                    reserved
                    maxRange
                    tank
                
                    trips{
                      id
                      user {
                        id
                        name
                        colour
                      }
                      date
                      distance
                    }
                    
                    transactions{
                      id
                      user {
                        id
                        name
                        colour
                      }
                      date
                      liters
                      amount
                    }
                
                    reservations{
                      id
                      user {
                        id
                        name
                        colour
                      }
                      startDate
                      endDate
                    }
                
                    owner {
                      id
                      name
                      colour
                    }
                
                    users{
                      id
                      name
                      colour
                    }
                  }
              }`
          }, {
              headers: {
                'Content-Type': 'application/json'
              }
            })
        return res.data.data.cars as Car[];
    }
}