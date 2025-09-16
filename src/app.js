import ShowActors from "./ShowActor";
import "../css/style.scss";
import data from "../assets/json/data.json";
(() => {
  new ShowActors(data.content);
})();
