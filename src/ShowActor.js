import Oic from "./Oic";
class ShowActors {
  constructor(data) {
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
      menuItem.addEventListener("click", (e)=> this.changeContent(e, el))
    });

    const cardContainer = document.createElement("section");
    cardContainer.id = "cardContainer";
    document.body.appendChild(cardContainer);

    const card = document.createElement("div");
    card.id = "card";
    cardContainer.appendChild(card);

    const childCardArray = ["headline", "imagecon", "content", "info"];

    const oic = new Oic();
    oic.ce(card, childCardArray, "div");

    // childCardArray.forEach((elementId, index)=>{
    //     const cardChild = document.createElement('div');
    //     cardChild.id=elementId;
    //     card.appendChild(cardChild)
    // })

    const showImg = document.createElement("img");
    showImg.id = "showImg";
    showImg.src = "../assets/images/ninja.png";
    document.querySelector("#imagecon").appendChild(showImg);

    const footer = document.createElement("footer");
    footer.id = "footer";
    document.body.appendChild(footer); 
  } //end constructor

  changeContent(e, data){
    console.log(e,data)

    //text above image
    let mHeadline = document.querySelector("#headline");
    mHeadline.textContent = data.name;

    //image changer
    const imageSrc = data.img;
    const imgRef = `../assets/images/${imageSrc}`;

    console.log(imgRef)

    let mImg = document.querySelector("#showImg");
    mImg.src = imgRef;

    let textContent = document.querySelector("#content");
    textContent.textContent = data.text;

  }
} //end class

export default ShowActors;
