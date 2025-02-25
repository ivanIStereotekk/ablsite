import { ModeToggle } from "./mode-toggle";
import UserLoggedOrNot from "./user-logged-or-not";

export default function HeadingComponent(){
    return<> 
    <header className="flex flex-row pl-10 pt-3 hover:bg-slate-200 dark:bg-slate-900 justify-between">

      <ModeToggle/>
      <div className="flex flex-row pr-10 pb-3">
          <UserLoggedOrNot/>
      </div>

    </header>

    </>
}