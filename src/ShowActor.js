import Oic from "./Oic";
import gsap from "gsap";
import ChangeContent from "./ChangeContent";

class ShowActors {
  constructor(data) {

    const cc = new ChangeContent();

    console.log(data);

    const menuContainer = document.createElement("nav");
    menuContainer.id = "menuContainer";
    document.body.appendChild(menuContainer);

    const menuItemContainer = document.createElement("ul");
    menuItemContainer.id = "menuItemContainer";
    menuContainer.appendChild(menuItemContainer);

    data.forEach((el, index) => {
      const menuItem = document.createElement("li");
      menuItem.setAttribute("data-index", index);
      menuItem.className = "menuItem";
      menuItem.textContent = el.name;
      menuItemContainer.appendChild(menuItem);
      menuItem.addEventListener("click", (e) => cc.getData(e, el));
    });

    const cardContainer = document.createElement("section");
    cardContainer.id = "cardContainer";
    document.body.appendChild(cardContainer);

    const card = document.createElement("div");
    card.id = "card";
    cardContainer.appendChild(card);
    card.addEventListener("click", ()=>{
      // console.log(this.currentDataindex);

      // console.log(data[this.currentDataindex].information)

      console.log(cc.currentIndex)
      
  })

    const childCardArray = ["headline", "imagecon", "content", "info"];

    const oic = new Oic();
    oic.ce(card, childCardArray, "div");

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
