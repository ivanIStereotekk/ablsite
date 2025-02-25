"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LoggedUserHoverCard } from "./hover-card-logged-user"


// we need here button handler that fetching user and set token to cookie or local storage

export default  function UserButtonDialog() {
  
        return (
            <Dialog>
              <DialogTrigger asChild>
            <Button variant="ghost">Login / Войти</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Введите логин и пароль</DialogTitle>
                  <DialogDescription>
                    Если у вас куплен курс то эти данные в вашем почтовом ящике.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Логин (email)
                    </Label>
                    <Input
                      id="login"
                      defaultValue="Anthony Collins"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="password" className="text-right">
                      Пароль
                    </Label>
                    <Input
                    type="password"
                      id="password"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Войти</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )
        

    }
  
