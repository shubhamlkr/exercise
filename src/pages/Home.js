import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import axios from "axios"
const Home=()=>{
    const[workouts,setWorkouts]=useState(null);
    const[c,setc]=useState(0)
   
    useEffect(()=>{
   
          axios.get(' https://fine-rose-gazelle-hat.cyclic.app/api/workouts').
            then((res)=>{
                setWorkouts(res.data)
            })
            .catch((err)=>{
                console.log(err.message)
            })
        
       
    },[c])
    const handle=()=>{
        setc(1-c);
    }
    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetails key={workout._id} workout={workout} hjk={handle} />
                ))}
            </div>
            <WorkoutForm handle={handle} />
        </div>
    )
}
export default Home