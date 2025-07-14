import { CheckCircle } from "lucide-react";
import { Badge } from "./ui/badge";
import { isOnline } from "@/hooks/check-online";

export function SystemStatus(){

 


    return(
        <div className="flex items-center gap-2">
              {false ? 
              <Badge variant="outline" className="text-green-600 border-green-600">
              <CheckCircle className="mr-1 h-3 w-3" />
              System Online
            </Badge> : 
            <Badge variant="outline" className="text-red-600 border-red-600">
            <CheckCircle className="mr-1 h-3 w-3" />
            System Ofline
          </Badge>
          }
            </div>
    )
}