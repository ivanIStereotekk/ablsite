"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { LoggedUserHoverCard } from "./hover-card-logged-user"
import { useState } from "react"
import UserButtonDialog from "./user-dialog-button"  


// If storage has token we retrieving activeUser

// we need here useEffect that checks token and retrieves user

  export default function UserLoggedOrNot(){
    
    let [activeUser, setActiveUser] = useState(null) 
    if (activeUser == null) {
      return<>
        <UserButtonDialog></UserButtonDialog>
        </>
    }else if (activeUser != null){
      return<>
      <LoggedUserHoverCard currentUser={activeUser}></LoggedUserHoverCard>
      </>
      // 
      
    }
        
  }