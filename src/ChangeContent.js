import gsap from "gsap";

class ChangeContent {
  constructor() {
    console.log("im held against my will");
    this.currentDataindex = -1;
  }

  getData(e, data) {
    this.currentDataindex = e.currentTarget.dataset.index;

    console.log(e, data);

    //text above image
    let mHeadline = document.querySelector("#headline");
    mHeadline.textContent = data.name;

    //image changer
    const imageSrc = data.img;
    const imgRef = `../assets/images/${imageSrc}`;

    console.log(imgRef);

    let mImg = document.querySelector("#showImg");
    mImg.src = imgRef;

    let textContent = document.querySelector("#content");
    textContent.textContent = data.text;

    let cardContainer = document.querySelector("#cardContainer");
    gsap.to(cardContainer, {
      duration: 0.05,
      scaleX: -1,
      alpha: 0,
      repeat: 3,
      yoyo: true,
    });
  }

  get currentIndex() {
    return this.currentDataindex;
  }
}

export default ChangeContent;
