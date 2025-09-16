import { gsap } from "gsap";
class CardData {
  constructor(cc, data) {
    console.log(cc.currentIndex);

      if (cc.currentIndex > -1) {
        document.querySelector("#info").style.display = "block";

        gsap.to("#info", {
          duration: 0.05,
          rotate: 10,
          scale: 1.3,
          repeat: 3,
          transformOrigin: "center",
          yoyo: true,
        });

        let addInfo = data[cc.currentIndex].information;
        console.log(addInfo);

        let mStrength = document.querySelector("#strength");
        mStrength.textContent = addInfo.strength;

        let mLives = document.querySelector("#lives");
        mLives.textContent = addInfo.lives;
      }
  }
}
export default CardData;
