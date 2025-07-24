"use client"

import { SyncStatus } from "@/components/sync-status"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Wifi, WifiOff } from "lucide-react"

export default function SyncDemoPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Auto Data Sync Demo</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          This page demonstrates the automatic data synchronization feature between your offline 
          and online databases. The system continuously monitors internet connectivity and syncs 
          unsynced data when a connection is available.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* How it Works */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              How Auto Sync Works
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="bg-blue-50 text-blue-700">1</Badge>
                <div>
                  <p className="font-medium">Offline Operations</p>
                  <p className="text-sm text-gray-600">
                    All database operations work normally offline with sync field set to false.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="bg-green-50 text-green-700">2</Badge>
                <div>
                  <p className="font-medium">Connection Detection</p>
                  <p className="text-sm text-gray-600">
                    System monitors internet connectivity every 5 seconds.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="bg-purple-50 text-purple-700">3</Badge>
                <div>
                  <p className="font-medium">Auto Sync</p>
                  <p className="text-sm text-gray-600">
                    When online, unsynced records are automatically pushed to the cloud database.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="bg-orange-50 text-orange-700">4</Badge>
                <div>
                  <p className="font-medium">Status Updates</p>
                  <p className="text-sm text-gray-600">
                    Records are marked as synced and timestamped upon successful sync.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wifi className="w-5 h-5" />
              Sync Features
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Automatic background synchronization</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Real-time connection status monitoring</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Intelligent retry mechanism</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm">Manual sync trigger option</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm">Detailed sync status and error reporting</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm">Handles all database tables automatically</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sync Status Component */}
      <div className="max-w-2xl mx-auto">
        <SyncStatus />
      </div>

      {/* Test Instructions */}
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Testing the Sync Feature</CardTitle>
          <CardDescription>
            Follow these steps to test the auto-sync functionality
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm"><strong>Step 1:</strong> Create some data while offline (customers, products, sales, etc.)</p>
            </div>
            
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm"><strong>Step 2:</strong> Check the sync status above - you should see unsynced records</p>
            </div>
            
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm"><strong>Step 3:</strong> Disconnect from internet and observe the offline status</p>
            </div>
            
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm"><strong>Step 4:</strong> Reconnect to internet and watch the automatic sync in action</p>
            </div>
            
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm"><strong>Step 5:</strong> Use the manual sync button to trigger sync immediately</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}