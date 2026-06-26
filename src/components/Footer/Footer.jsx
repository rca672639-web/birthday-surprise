import { FaHeart } from "react-icons/fa";

export default function Footer(){

return(

<footer

className="py-32 text-center bg-[#4B2E2B] text-white"

>

<h2

className="text-7xl"

style={{

fontFamily:"Great Vibes"

}}

>

Happy Birthday

</h2>

<h3

className="mt-6 text-4xl text-pink-300"

>

Sharlyn ❤️

</h3>

<p

className="mt-10 text-xl"

>

May every dream you have

find its way into reality.

May laughter never leave your heart.

May love surround you today

and every day.

</p>

<div className="mt-16 flex justify-center">

<FaHeart

size={70}

className="text-pink-400 animate-pulse"

/>

</div>

</footer>

)

}