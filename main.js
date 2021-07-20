import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";


import BoardGame from "./src/objects/BoardGame";
import ScoreBoard from "./src/objects/ScoreBoard";




const $root = document.querySelector("#root")


$root.addEventListener("click", (e)=>{
  if(e.target.classList.contains("card-game")){
    console.log("oi")
  }
})

$root.insertAdjacentHTML("beforeend",`
${ScoreBoard()}
${BoardGame(6)}


`)
