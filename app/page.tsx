import Image from "next/image";
import Abletonlogo from "./custom-components/ableton-logo";
import PresentationTextBox from "./custom-components/presentation-text-box";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <Abletonlogo/>
      <PresentationTextBox/>
      
      <footer>
        

        

        <div className="flex flex-row">
          {/* <PresentationTextBox></PresentationTextBox> */}

        </div>
      </footer>
    </div>
  );
}
