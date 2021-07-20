import "./style.css";

let img = `<img src="src/img/alura-pixel.png" alt="Logo da Alura">`


function CardGame(){
  if(img === `<img src="src/img/alura-pixel.png" alt="Logo da Alura"></img>`){
    img = `<img src="src/img/JavaScript.png" alt="Logo da Alura"></img>`
  }

  return /*html*/`
    <article class="card-game">
    ${img}
    </article>
  
  `
}
export default CardGame