import Cursor from "./Cursor";

export default function Typewriter({
    text,
    progress = 100
}){

return(

<>

<div className="mb-8 h-2 rounded-full bg-pink-100">

<div

className="h-full rounded-full bg-pink-500 transition-all duration-300"

style={{

width:`${progress}%`

}}

/>

</div>

<div

className="whitespace-pre-wrap text-lg leading-10 text-[#4B2E2B]"

>

{text}

<Cursor/>

</div>

</>

)

}