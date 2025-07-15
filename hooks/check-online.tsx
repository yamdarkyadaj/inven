"use client"

import { useEffect, useState } from "react"

export function useOnlineStatus(url = "https://ping-v6lv.onrender.com/", interval = 5000) {
  const [online, setOnline] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let timer: any

    async function checkStatus() {
      setLoading(true)
      try {
        const res = await fetch(url, { method: "GET" })
        setOnline(res.ok)
        console.log(res.ok ? "online" : "offline")
      } catch (error) {
        setOnline(false)
        console.log("offline")
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

  return { online, loading }
}
