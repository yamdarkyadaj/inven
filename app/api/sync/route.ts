import { NextRequest, NextResponse } from "next/server"
import { dataSyncService } from "@/lib/sync-service"


export async function POST(request: NextRequest) {

  const {online} = await request.json()
 
  try {
    // await dataSyncService.setOnlineStatus(online)
    
    // const result = await dataSyncService.syncAllData()
    
    // return NextResponse.json({
    //   success: result.success,
    //   message: result.success 
    //     ? `Successfully synced ${result.totalSynced} records across ${result.syncedTables.length} tables`
    //     : "Sync failed",
    //   data: result,
    // })
    return NextResponse.json("hi")
  } catch (error) {
    console.error("Sync API error:", error)
    return NextResponse.json({
      success: false,
      message: "Internal server error during sync",
      error: error instanceof Error ? error.message : "Unknown error",
    }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    // const status = await dataSyncService.getSyncStatus()
    
    // return NextResponse.json({
    //   success: true,
    //   data: status,
    // })
    return NextResponse.json("hiiiii")
  } catch (error) {
    console.error("Sync status API error:", error)
    return NextResponse.json({
      success: false,
      message: "Failed to get sync status",
      error: error instanceof Error ? error.message : "Unknown error",
    }, { status: 500 })
  }
}