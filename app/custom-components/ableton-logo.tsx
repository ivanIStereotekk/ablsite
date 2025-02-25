import Image from "next/image"
import AbletonSVG from '/public/ableton-logo.svg'
export default function Abletonlogo(){
    return<>
    <div>

        <Image
            src={AbletonSVG}    
            alt="Ableton Dynamic Logo" 
            width={700} 
            className=" relative hover:top-4 hover:left-4">
        </Image>
       
           
    </div>
    
    </>
}