"use client"

import { useAutoSync } from "@/hooks/use-auto-sync"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  Cloud, 
  CloudOff, 
  Loader2, 
  RefreshCw, 
  CheckCircle, 
  XCircle, 
  Database,
  Clock,
  AlertCircle
} from "lucide-react"
import { useState } from "react"
import toast from "react-hot-toast"

export function SyncStatus() {
  const [showDetails, setShowDetails] = useState(false)
  
  const {
    online,
    loading,
    isSyncing,
    lastSyncTime,
    syncStatus,
    lastSyncResult,
    retryCount,
    maxRetries,
    manualSync,
    refreshSyncStatus,
  } = useAutoSync({
    interval: 30000, // 30 seconds
    onSyncStart: () => {
      toast.loading("Starting data sync...", { id: "sync-toast" })
    },
    onSyncComplete: (result) => {
      if (result.success) {
        toast.success(
          `Sync completed! ${result.totalSynced} records synced across ${result.syncedTables.length} tables.`,
          { id: "sync-toast", duration: 4000 }
        )
      } else {
        toast.error(`Sync failed: ${result.errors.join(", ")}`, { id: "sync-toast" })
      }
    },
    onSyncError: (error) => {
      toast.error(`Sync error: ${error}`, { id: "sync-toast" })
    },
  })

  const handleManualSync = async () => {
    await manualSync()
  }

  const handleRefreshStatus = async () => {
    await refreshSyncStatus()
    toast.success("Sync status refreshed")
  }

  const getConnectionStatus = () => {
    if (loading) return { icon: Loader2, text: "Checking...", color: "text-yellow-500" }
    if (online) return { icon: Cloud, text: "Online", color: "text-green-500" }
    return { icon: CloudOff, text: "Offline", color: "text-red-500" }
  }

  const getSyncStatusBadge = () => {
    if (isSyncing) return <Badge variant="secondary" className="bg-blue-100 text-blue-800"><Loader2 className="w-3 h-3 mr-1 animate-spin" />Syncing</Badge>
    if (lastSyncResult?.success) return <Badge variant="secondary" className="bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1" />Up to date</Badge>
    if (lastSyncResult && !lastSyncResult.success) return <Badge variant="secondary" className="bg-red-100 text-red-800"><XCircle className="w-3 h-3 mr-1" />Failed</Badge>
    return <Badge variant="outline">Not synced</Badge>
  }

  const connectionStatus = getConnectionStatus()
  const ConnectionIcon = connectionStatus.icon
  const totalUnsynced = syncStatus?.totalUnsynced || 0

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <Database className="w-5 h-5" />
              Data Sync Status
            </CardTitle>
            <CardDescription>
              Automatic synchronization between offline and online databases
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            {getSyncStatusBadge()}
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefreshStatus}
              disabled={loading}
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Connection Status */}
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <ConnectionIcon className={`w-4 h-4 ${connectionStatus.color} ${loading ? 'animate-spin' : ''}`} />
            <span className="font-medium">Connection Status</span>
          </div>
          <span className={connectionStatus.color}>{connectionStatus.text}</span>
        </div>

        {/* Sync Summary */}
        {syncStatus && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Unsynced Records</span>
              <span className="text-sm text-gray-600">{totalUnsynced} records</span>
            </div>
            
            {totalUnsynced > 0 && (
              <Progress 
                value={0} 
                className="h-2" 
                style={{ 
                  '--progress-background': totalUnsynced > 100 ? '#ef4444' : totalUnsynced > 50 ? '#f59e0b' : '#10b981' 
                } as any}
              />
            )}
          </div>
        )}

        {/* Last Sync Info */}
        {lastSyncTime && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>Last sync: {lastSyncTime.toLocaleString()}</span>
          </div>
        )}

        {/* Retry Info */}
        {retryCount > 0 && (
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Retry attempt {retryCount} of {maxRetries}
            </AlertDescription>
          </Alert>
        )}

        {/* Sync Errors */}
        {lastSyncResult && !lastSyncResult.success && lastSyncResult.errors.length > 0 && (
          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Sync Errors:</strong>
              <ul className="mt-1 list-disc list-inside">
                {lastSyncResult.errors.map((error, index) => (
                  <li key={index} className="text-sm">{error}</li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2 pt-2">
          <Button
            onClick={handleManualSync}
            disabled={!online || isSyncing}
            className="flex-1"
          >
            {isSyncing ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Syncing...
              </>
            ) : (
              <>
                <RefreshCw className="w-4 h-4 mr-2" />
                Manual Sync
              </>
            )}
          </Button>
          
          <Button
            variant="outline"
            onClick={() => setShowDetails(!showDetails)}
            size="sm"
          >
            {showDetails ? "Hide" : "Show"} Details
          </Button>
        </div>

        {/* Detailed Status */}
        {showDetails && syncStatus && (
          <div className="mt-4 space-y-2 p-3 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-sm mb-2">Unsynced Records by Table:</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {Object.entries(syncStatus.unsyncedTables).map(([table, count]) => (
                count > 0 && (
                  <div key={table} className="flex justify-between">
                    <span className="capitalize">{table}:</span>
                    <span className="font-medium">{count}</span>
                  </div>
                )
              ))}
            </div>
            
            {lastSyncResult && lastSyncResult.success && lastSyncResult.syncedTables.length > 0 && (
              <div className="mt-3 pt-2 border-t">
                <h4 className="font-medium text-sm mb-1">Last Sync Result:</h4>
                <div className="text-xs text-green-700">
                  {lastSyncResult.syncedTables.join(", ")}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Offline Notice */}
        {!online && !loading && (
          <Alert>
            <CloudOff className="h-4 w-4" />
            <AlertDescription>
              Data sync is paused while offline. Sync will resume automatically when connection is restored.
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}