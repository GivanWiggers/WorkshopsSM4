import "./UserScreen.scss";
import UserStatsCard from "../../components/UserStatsCard/UserStatsCard";
import UserPageHeader from "../../components/UserPageHeader/UserPageHeader";
import { useFetchUser } from "../../api/useQueryHooks/useUserHooks";
import CalendarCard from "../../components/CalendarCard/CalendarCard";
import { useFetchCars } from "../../api/useQueryHooks/carHooks";
import { Reservation, User } from "../../globaltypes";
import { auth, db, provider } from "../../firebase/firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { Button } from "@mui/material";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, getRedirectResult, GoogleAuthProvider, signOut } from "firebase/auth";
import { useEffect } from "react";

var Uid = "";

const createUser = () => {
    createUserWithEmailAndPassword(auth, "karavanoranje@gmail.com", "123456")
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
}
const signinUser = () => {
    signInWithEmailAndPassword(auth, "karavanoranje@gmail.com", "123456")
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}
const redirectGoogle = () => {
    signInWithRedirect(auth, provider)
}
const redirectResults = () => {
    getRedirectResult(auth)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result!);
        const token = credential!.accessToken;
        
        // The signed-in user info.
        const user = result!.user;
        console.log(user)
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}
const signOutFunction = () => {
    signOut(auth).then(() =>{
      // Sign-out successful.
      console.log("logout succesfull")
    }).catch((error) => {
        // An error happened.
    })
}

// const addFire = async () => {
//     try {
//         const docRef = await addDoc(collection(db, "users"), {
//           id: 2,
//           name: "Bob van Test",
//           colour: "Grey",
//           firebaseId: 2
//         });
//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
// }

// const updateFire = async () => {
//     try {
//         const updateDocRef = doc(db, "users", "N5DfOsjcHpLMrGJyZVUz");
//         const docRef = await updateDoc(updateDocRef, {
//           colour: "Black"
//         });
//         console.log("Update called: ");
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
// }

const UserScreen = () => {
    const { data: user, isLoading } = useFetchUser();
    const { data: cars } = useFetchCars();
    var reservations: Reservation[];

    function getReservationsFromUser(user: User): Reservation[]{
        cars?.forEach(car => {
            var addreservations = car.reservations.filter(x => x.user.id == user.id)
            reservations.concat(addreservations)
        });
        console.log(reservations);
        return reservations
    }

    useEffect(() => {
        redirectResults()
        console.log(auth.currentUser)
    }, []);

    return (
        <div className="main-container">
            <div className="user-containers">
                {user ? (
                    <>
                        <UserPageHeader name={user.name} colour={user.colour} />
                        <UserStatsCard driven={100} paid={210} />
                        {/* <CalendarCard reservations={getReservationsFromUser(user)}/> */}
                    </>
                ) : (
                    <>
                        <UserPageHeader name="-" colour="white" />
                        <UserStatsCard driven={0} paid={0} />
                    </>
                )}
                {/* <CarPageHeader name={"COOPER SE"} type={CarTypeEnum.minicooperside} colour={"Orange"} tripStatus={false}></CarPageHeader> */}
                {/* <CarStatsCard range={car.maxRange} volume={car.tank} odometer={car.odometer} consumption={"1 L:" + Math.round((car.maxRange/car.tank)).toString() + " km"}></CarStatsCard>
                <AverageUseStatsCard car={car}></AverageUseStatsCard> */}
                {/* <OdometerOverlay car={car} /> */}

                {/* <Button onClick={() => addFire()}>Add</Button>
                <Button onClick={() => updateFire()}>Update</Button> */}
                <Button onClick={() => createUser()}>Create User</Button>
                <Button onClick={() => signinUser()}>Sign in User</Button>
                <Button onClick={() => redirectGoogle()}>Google redirect</Button>
                <Button onClick={() => signOutFunction()}>Sign out</Button>
            </div>
        </div>
    );
};

export default UserScreen;
