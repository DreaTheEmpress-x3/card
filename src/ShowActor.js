import Oic from "./Oic";
import gsap from "gsap";
import ChangeContent from "./ChangeContent";
import Menu from "./Menu";
import CardData from "./CardData";

class ShowActors {
  constructor(data) {
    const cc = new ChangeContent();
    const menu = new Menu(cc, data);

    console.log(data);

    const cardContainer = document.createElement("section");
    cardContainer.id = "cardContainer";
    document.body.appendChild(cardContainer);

    const card = document.createElement("div");
    card.id = "card";
    cardContainer.appendChild(card);

    const childCardArray = ["headline", "imagecon", "content", "info"];

    const oic = new Oic();
    oic.ce(card, childCardArray, "div");

    const infoChild = document.createElement("div");
    infoChild.id = "infochild";
    document.querySelector("#info").appendChild(infoChild);

    const strength = document.createElement("div");
    strength.id = "strength";
    document.querySelector("#infochild").appendChild(strength);

    const lives = document.createElement("div");
    lives.id = "lives";
    document.querySelector("#infochild").appendChild(lives);

    card.addEventListener("click", () => new CardData(cc, data));


    const showImg = document.createElement("img");
    showImg.id = "showImg";
    showImg.src = "../assets/images/ninja.png";
    document.querySelector("#imagecon").appendChild(showImg);

    const footer = document.createElement("footer");
    footer.id = "footer";
    document.body.appendChild(footer);
  } //end constructor
} //end class

export default ShowActors;
