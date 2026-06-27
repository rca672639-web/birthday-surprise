import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Fireworks(){

const{

width,

height

}=useWindowSize();

return(

<Confetti

width={width}

height={height}

recycle={true}

/>

)

}