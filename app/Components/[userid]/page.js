"use client"
import { useParams } from "next/navigation"

function DynmaicRouting(){
    const id = useParams()
    console.log(id)
    return(
        <h1>
            Id 
        </h1>
    )
}

export default DynmaicRouting