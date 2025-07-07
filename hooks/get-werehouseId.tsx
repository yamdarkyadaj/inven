import { usePathname } from "next/navigation"

export function getWareHouseId(){
    const path = usePathname()
    console.log(path.split("/")[2])
    const wareHousId = path.split("/")[2]
    return wareHousId
}