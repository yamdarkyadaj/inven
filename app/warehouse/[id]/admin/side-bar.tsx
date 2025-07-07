"use client"

import type * as React from "react"
import {
  BarChart3,
  Bell,
  ChevronRight,
  Home,
  Package,
  Plus,
  Settings,
  ShoppingCart,
  FileText,
  Truck,
  ArrowLeftRight,
  Users,
  User,
  Building2,
  UserCheck,
  Eye,
  Warehouse,
  type LucideIcon,
} from "lucide-react"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import fetchData from "@/hooks/fetch-data"
import { signOut, useSession } from "next-auth/react"
import { Button } from "@heroui/button"
import { getWareHouseId } from "@/hooks/get-werehouseId"


// const warehouse = getWareHouseId()

// 

// Navigation data for inventory management system

function NavSection({
  title,
  items,
}: {
  title: string
  items: Array<{
    title: string
    url?: string
    icon: LucideIcon
    items?: Array<{
      title: string
      url: string
      icon?: LucideIcon
    }>
  }>
}) {

  
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          if (item.items) {
            return (
              <Collapsible key={item.title} className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      <item.icon />
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              {subItem.icon && <subItem.icon className="w-4 h-4" />}
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            )
          }

          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}

export function WarehouseAppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const {data:session} = useSession()
  
  const {data,loading,error} = fetchData("/api/settings")
  const warehouseId = getWareHouseId()
  
 

  if(loading) return ""

  // const isOnline = useConnectionCheck()

  const endPoint = `/warehouse/${warehouseId}/${session?.user?.role}`
 
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Package className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{data?.companyName}</span>
                  <span className="truncate text-xs">Admin Management System</span>
                  {/* {isOnline ? "online" : "ofline"} */}
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
          <NavSection title="Overview" items={[
            {
              title: "Dashboard",
              url: "/dashboard",
              icon: Home,
            },
          ]} />
        <NavSection title="Transaction" items={[
            {
              title: "Sales",
              icon: ShoppingCart,
              items: [
                {
                  title: "Add Sale",
                  url: `${endPoint}/sales/add`,
                  icon: Plus,
                },
                {
                  title: "View Sales",
                  url: "/sales/list",
                  icon: Eye,
                },
              ],
            },
            {
              title: "Purchases",
              icon: Truck,
              items: [
                {
                  title: "Add Purchase",
                  url: `${endPoint}/purchases/add`,
                  icon: Plus,
                },
                {
                  title: "View Purchases",
                  url: "/purchases/list",
                  icon: Eye,
                },
              ],
            },
            
          ]} />
        <NavSection title="People" items={[
            {
              title: "People",
              icon: Users,
              items: [
                {
                  title: "Users",
                  url: "/people/users",
                  icon: User,
                },
                {
                  title: "Customers",
                  url: "/people/customers",
                  icon: UserCheck,
                },
                {
                  title: "Suppliers",
                  url: "/people/suppliers",
                  icon: Building2,
                },
              ],
            },
          ]} />
      <NavSection title="System" items={[
          {
            title: "Notifications",
            url: "/notifications",
            icon: Bell,
          },
          {
            title: "Reports",
            url: "/reports",
            icon: BarChart3,
          },
          {
            title: "Settings",
            url: "/settings",
            icon: Settings,
          },
        ]} />
        <Button onClick={()=>signOut()} className="bg-red-500 m-2">Logout</Button>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
