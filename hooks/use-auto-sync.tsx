"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { useOnlineStatus } from "./check-online"
import { dataSyncService, SyncResult } from "@/lib/sync-service"

interface AutoSyncOptions {
  interval?: number // Sync interval when online (in milliseconds)
  retryDelay?: number // Delay before retrying after failed sync
  maxRetries?: number // Maximum number of retry attempts
  onSyncStart?: () => void
  onSyncComplete?: (result: SyncResult) => void
  onSyncError?: (error: string) => void
}

export function useAutoSync(options: AutoSyncOptions = {}) {
  const {
    interval = 30000, // 30 seconds default
    retryDelay = 10000, // 10 seconds default
    maxRetries = 3,
    onSyncStart,
    onSyncComplete,
    onSyncError,
  } = options

  const { online, loading } = useOnlineStatus()
  const [isSyncing, setIsSyncing] = useState(false)
  const [lastSyncTime, setLastSyncTime] = useState<Date | null>(null)
  const [syncStatus, setSyncStatus] = useState<{
    totalUnsynced: number
    unsyncedTables: Record<string, number>
  } | null>(null)
  const [retryCount, setRetryCount] = useState(0)
  const [lastSyncResult, setLastSyncResult] = useState<SyncResult | null>(null)

  const syncTimeoutRef = useRef<NodeJS.Timeout>()
  const retryTimeoutRef = useRef<NodeJS.Timeout>()
  const isSyncingRef = useRef(false)
  
  // Store stable references to callbacks
  const onSyncStartRef = useRef(onSyncStart)
  const onSyncCompleteRef = useRef(onSyncComplete)
  const onSyncErrorRef = useRef(onSyncError)

  // Update refs when callbacks change
  useEffect(() => {
    onSyncStartRef.current = onSyncStart
    onSyncCompleteRef.current = onSyncComplete
    onSyncErrorRef.current = onSyncError
  }, [onSyncStart, onSyncComplete, onSyncError])

  // Update sync service online status
  useEffect(() => {
    dataSyncService.setOnlineStatus(online)
  }, [online])

  // Get sync status - stable function with no dependencies
  const getSyncStatus = useCallback(async () => {
    try {
      const status = await dataSyncService.getSyncStatus()
      setSyncStatus(status)
      return status
    } catch (error) {
      console.error("Failed to get sync status:", error)
      return null
    }
  }, [])

  // Perform sync - use ref to avoid circular dependency
  const performSyncRef = useRef<() => Promise<void>>()
  
  const performSync = useCallback(async () => {
    if (isSyncingRef.current || !online) {
      return
    }

    isSyncingRef.current = true
    setIsSyncing(true)
    onSyncStartRef.current?.()

    try {
      const result = await dataSyncService.syncAllData()
      setLastSyncResult(result)
      setLastSyncTime(new Date())
      
      if (result.success) {
        setRetryCount(0)
        onSyncCompleteRef.current?.(result)
        // Update sync status after successful sync
        getSyncStatus()
      } else {
        throw new Error(result.errors.join(", "))
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown sync error"
      onSyncErrorRef.current?.(errorMessage)
      
      // Retry logic
      setRetryCount(prev => {
        if (prev < maxRetries) {
          retryTimeoutRef.current = setTimeout(() => {
            performSyncRef.current?.()
          }, retryDelay)
          return prev + 1
        }
        return prev
      })
    } finally {
      isSyncingRef.current = false
      setIsSyncing(false)
    }
  }, [online, maxRetries, retryDelay])

  // Update the ref
  useEffect(() => {
    performSyncRef.current = performSync
  }, [performSync])

  // Manual sync trigger
  const manualSync = useCallback(async () => {
    setRetryCount(0) // Reset retry count for manual sync
    await performSyncRef.current?.()
  }, [])

  // Auto sync when online - use refs to avoid dependency issues
  useEffect(() => {
    if (online && !loading) {
      // Initial sync when coming online
      performSyncRef.current?.()

      // Set up periodic sync
      syncTimeoutRef.current = setInterval(() => {
        performSyncRef.current?.()
      }, interval)
    } else {
      // Clear timeouts when offline
      if (syncTimeoutRef.current) {
        clearInterval(syncTimeoutRef.current)
      }
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current)
      }
    }

    return () => {
      if (syncTimeoutRef.current) {
        clearInterval(syncTimeoutRef.current)
      }
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current)
      }
    }
  }, [online, loading, interval])

  // Get initial sync status - only run once
  useEffect(() => {
    getSyncStatus()
  }, [])

  return {
    online,
    loading,
    isSyncing,
    lastSyncTime,
    syncStatus,
    lastSyncResult,
    retryCount,
    maxRetries,
    manualSync,
    refreshSyncStatus: getSyncStatus,
  }
}