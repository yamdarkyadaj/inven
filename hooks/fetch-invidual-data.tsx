"use client"
import axios from "axios";
import { useEffect, useState } from "react";

const fetchWareHouseData = (url:any,response:any) => {
    const [loading,setLoading] = useState<any>(false)
    const [error,setError] = useState<any>(false)
    const [data,setData] = useState<any>(null)

    async function fetch() {
        setLoading(true)
        try {   
            const rep = await axios.post(url,response)
            setData(rep.data)
        } catch (error) {
            setError(true)    
        }finally{
            setLoading(false)
        }
    }
    
   useEffect(()=>{
    if(!url) return
    fetch()

   },[url])
   
    return {data,loading,error,refetch: fetch}
}

export default fetchWareHouseData