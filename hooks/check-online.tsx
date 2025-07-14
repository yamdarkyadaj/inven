"use client"

import { useEffect, useState } from "react"


export async function isOnline(url = "http://localhost:2001/",interval = 1000){
    const [loading,setLoading] = useState<any>(true)
    const [onLine,setOnline] = useState<any>(false)

    useEffect(()=>{
        async function data() {
            setLoading(true)
            try {   
                const res = await fetch(url)
                if(res.ok){
                    setOnline(true)
                    console.log("online")
                }else{
                    setOnline(false)
                    console.log("ofline")
                }
            } catch (error) {
                setOnline(false)
                console.log("ofline")
            }finally{
                setLoading(false)
            }
        }
        data()
    },[url])

    return onLine

}