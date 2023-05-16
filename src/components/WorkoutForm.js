import { useState } from "react"
import axios from "axios"

const WorkoutForm=({handle})=>{
    const [title,setTitle]=useState('')
    const [load,setLoad]=useState('')
    const [reps,setReps]=useState('')
    const [error,setError]=useState(null)

    const handleSubmit=async(e)=>{
        e.preventDefault()

        const workout={title,load,reps}
       

        const response=await axios.post("http://localhost:4000/api/workouts",workout)
       
        
if(response.status===200){
            setTitle('')
            setLoad('')
            setReps('')
            handle();
            setError(null)
            console.log('new Workout added');
        }
       else{
            // setError(response.error)
            console.log("fail")
        }
    }
    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            <label>Exercise Title:</label>
            <input
             type="text"
            onChange={(e)=>setTitle(e.target.value)}
            value={title}
            />

           <label>Load(kg):</label>
            <input
             type="number"
            onChange={(e)=>setLoad(e.target.value)}
            value={load}
            />
             <label>Number of Reps:</label>
            <input
             type="number"
            onChange={(e)=>setReps(e.target.value)}
            value={reps}
            />
            <button>Add workout</button>
            {error && <div className="error">{error}</div>}
        </form>

        
    )
}
export default WorkoutForm
