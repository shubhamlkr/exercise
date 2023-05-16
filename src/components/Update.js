import { useState,useEffect } from "react"
import {useParams} from "react-router-dom"
import axios from "axios"
const  Update= () => {
    const {id}=useParams();
    const [title,setTitle]=useState('')
    const [load,setLoad]=useState('')
    const [reps,setReps]=useState('')
    const [error,setError]=useState(null)

    const handleSubmit=async(e)=>{
        e.preventDefault()

        const workout={title,load,reps}
       

        const response=await axios.patch(" https://fine-rose-gazelle-hat.cyclic.app/api/workouts/"+id,workout)
       
        
if(response.status===200){
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            window.location.href="/"
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

        
    );
}
export default Update