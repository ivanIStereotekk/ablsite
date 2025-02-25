import { CalendarIcon } from "@radix-ui/react-icons"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { FaceIcon, ImageIcon, SunIcon } from "@radix-ui/react-icons"
import UserIcon from '/public/user-avatar.svg'
import AvatarIcon from '/public/avatar.svg'
import Image from "next/image"

export function LoggedUserHoverCard({currentUser}) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@{currentUser}</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="public/user-avatar.svg"/> 
            <AvatarFallback>{currentUser}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{currentUser}</h4>
            <p className="text-sm">
              Вы вошли как пользователь @{currentUser}
            </p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Вы на курсе с December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
