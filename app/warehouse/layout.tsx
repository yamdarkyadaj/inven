import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { WarehouseAppSidebar } from "./side-bar";

export default function SupAdminLayout({children}:{children:React.ReactNode}){
    return(
        <>
        <SidebarProvider>
            <WarehouseAppSidebar/>
            <SidebarInset>
                    {children}
            </SidebarInset>
        </SidebarProvider>
        </>
    )
}