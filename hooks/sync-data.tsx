"use client"

import { useEffect, useState } from "react"
import { useOnlineStatus } from "./check-online"

export function useAutoSync(url = "/api/syncNew", interval = 10000) {
  const [status, setStatus] = useState(false)
  const [loading, setLoading] = useState(true)
  const { online } = useOnlineStatus()

  useEffect(() => {
    if (!online) return

    let timer: NodeJS.Timeout

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

    checkStatus() // Initial call

    timer = setInterval(checkStatus, interval)

    return () => clearInterval(timer)
  }, [url, interval, online])

  return { status, loading }
}
