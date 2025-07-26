"use client"
import { useOnlineStatus } from "@/hooks/check-online";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function SupAdminLayout({children}:{children:React.ReactNode}){
    const {data,status} = useSession()
    const router = useRouter()
    const {online} = useOnlineStatus()
    
    useEffect(()=>{

        
        if(status == "unauthenticated"){
           
                router.replace("/user/login")
                console.log("not auth")
            
        }

        const interval = setInterval(async () => {
            if (online) {
              try {
                const response = await axios.post("/api/syncNew", { online });
                console.log("Sync success:", response.data);
              } catch (error) {
                console.error("Sync failed:", error);
              }
            }
          }, 20000); // 10000ms = 10 seconds
      
          // Cleanup when component unmounts
          return () => clearInterval(interval);
    
    // if(data?.role != "supaAdmina" && status == "authenticated") router.replace("/login")
    // if(status == "unauthenticated") router.push("/login")
    },[status,data,online])
       
    // if(data?.role != "supaAdmina") return router.replace("/login")
    
    return(
        <>
        
                    {children}
         
        </>
    )
}