import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Confetti(){

useEffect(()=>{

const duration=5000;

const end=Date.now()+duration;

(function frame(){

confetti({

particleCount:3,

spread:70,

origin:{y:.6}

});

if(Date.now()<end){

requestAnimationFrame(frame);

}

})();

},[]);

return null;

}