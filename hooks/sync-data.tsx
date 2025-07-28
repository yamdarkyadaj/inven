"use client"

import { useEffect, useState } from "react"
import { useOnlineStatus } from "./check-online"


export function useAutoSync(url = "/api/syncNew", interval = 10000) {
  const [status, setStatus] = useState(false)
  const [loading, setLoading] = useState(true)
  const {online} = useOnlineStatus()

  useEffect(() => {
    let timer: any

    async function checkStatus() {
      setLoading(true)
      try {
        const res = await fetch(url, { method: "POST" })
        setStatus(res.ok)
      } catch (error) {
        setStatus(false)
        
      } finally {
        setLoading(false)
      }
    }

    // Initial check
    checkStatus()

    // Set interval check
    timer = setInterval(checkStatus, interval)

    // Cleanup interval
    return () => clearInterval(timer)
  }, [url, interval])

  return { status, loading }
}
