import { cardActionAreaClasses, Fab, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Switch } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Car, User } from "../../globaltypes";
import AvatarCustom from "./../Avatar/Avatar";
import "./OdometerOverlay.scss";

interface IOdometerOverlay {
    car: Car;
}

export default function OdometerOverlay(props: IOdometerOverlay) {
    const navigate = useNavigate();
    
    const[odometer, setOdometer] = useState<number>(props.car.odometer)
    const[number1, setNumber1] = useState<number>(Number(String(props.car.odometer)[0]))
    const[number2, setNumber2] = useState<number>(Number(String(props.car.odometer)[1]))
    const[number3, setNumber3] = useState<number>(Number(String(props.car.odometer)[2]))
    const[number4, setNumber4] = useState<number>(Number(String(props.car.odometer)[3]))
    const[number5, setNumber5] = useState<number>(Number(String(props.car.odometer)[4]))
    const[number6, setNumber6] = useState<number>(Number(String(props.car.odometer)[5]))

    
    function getOdometer(){
        setOdometer(Number(" " + number1 + number2 + number3 + number4 + number5 + number6))
    }

    useEffect(() => {
        getOdometer()
        // console.log(odometer)
    },[number1, number2, number3, number4, number5, number6])
    
    return (
        <div className="odometerOverlay-container">
            <div className="odometer-topper">
                <h1>Current odometer count</h1>
            </div>
            <div className="odometer-container">
                <input className="inputNumber1" id="inputNumber1" name="inputNumber1" max={9} min={0} required={true} step={1} onChange={(event) => setNumber1(Number(event.target.value))} type={"number"} placeholder={(String(props.car.odometer)[props.car.odometer.toString().length - 6])}/>
                <input className="inputNumber2" id="inputNumber2" name="inputNumber2" max={9} min={0} required={true} step={1} onChange={(event) => setNumber2(Number(event.target.value))} type={"number"} placeholder={(String(props.car.odometer)[props.car.odometer.toString().length - 5])}/>
                <input className="inputNumber3" id="inputNumber3" name="inputNumber3" max={9} min={0} required={true} step={1} onChange={(event) => setNumber3(Number(event.target.value))} type={"number"} placeholder={(String(props.car.odometer)[props.car.odometer.toString().length - 4])}/>
                <h1>.</h1>
                <input className="inputNumber4" id="inputNumber4" name="inputNumber4" max={9} min={0} required={true} step={1} onChange={(event) => setNumber4(Number(event.target.value))} type={"number"} placeholder={(String(props.car.odometer)[props.car.odometer.toString().length - 3])}/>
                <input className="inputNumber5" id="inputNumber5" name="inputNumber5" max={9} min={0} required={true} step={1} onChange={(event) => setNumber5(Number(event.target.value))} type={"number"} placeholder={(String(props.car.odometer)[props.car.odometer.toString().length - 2])}/>
                <input className="inputNumber6" id="inputNumber6" name="inputNumber6" max={9} min={0} required={true} step={1} onChange={(event) => setNumber6(Number(event.target.value))} type={"number"} placeholder={(String(props.car.odometer)[props.car.odometer.toString().length - 1])}/>
            </div>
            <div className="odometer-users">
            <FormControl component="fieldset" variant="standard">
                <FormGroup>
                {props.car && props.car.users.map((user) => 
                    <FormControlLabel
                    control={
                        <Switch checked={false}  name={user.name} />
                    }
                    label={user.name}
                    />
                )}
                </FormGroup>
                </FormControl>
            </div>
            <div className="odometer-footer">
            <Fab
                        className="OdometerOverlayButton"
                        variant="extended"
                        size="small"
                        color="primary"
                        aria-label="add"
                        onClick={() => 
                            {props.car.odometer = odometer  //ODOMETER CAN BE CHANGED HERE
                            navigate("/safetyscreen")
                            console.log(props.car)}
                        }
                    >
                        Start trip
                    </Fab>

                    </div>
        </div>
    );
}
