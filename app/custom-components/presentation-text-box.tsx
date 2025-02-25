import TextPartitionOne from "./text-partition-one"
import TextPartitionTwo from "./text-partition-two"
import TextPartitionTree from "./text-partition-tree"

export default function PresentationTextBox(){
    return <>
        <div className="flex sm:flex-col xl:flex-row space-x-5 space-y-5 text-balance">

          <div className="flex flex-auto"></div>

        <TextPartitionOne/>
        <TextPartitionTwo/>
        <TextPartitionTree/>


        </div>
        
    </>
}