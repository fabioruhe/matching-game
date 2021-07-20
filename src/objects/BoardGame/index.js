import "./styles.css"
import CardGame from "../../components/CardGame"

function BoardGame(numberOfCards){
const $htmlCard = CardGame()
const $htmlContent = $htmlCard.repeat(numberOfCards);
return/*html*/`

<section class="board-game">
  ${$htmlContent}
</section>

` 

}
export default BoardGame