import react from "react"
import axios from "axios"
import { Link } from "react-router-dom"
const WorkoutDetails=({workout,hjk})=>{
    const handledelete=async()=>{
        const res=await axios.delete(" https://fine-rose-gazelle-hat.cyclic.app/api/workouts/"+workout._id)
        console.log(res.data);
        hjk();
    }
    return(
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load(kg):</strong>{workout.load}</p>
            <p><strong>Reps:</strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
            <button onClick={handledelete}>Delete</button>
            <Link to={"/updateform/"+workout._id}><button>Update</button></Link>
        </div>
    )
}
export default WorkoutDetails 