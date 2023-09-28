import Model from "../model/Model.js";
import NagyKep from "../view/NagyKep.js";

class Controller
{
    constructor()
    {
        const MODEL = new Model(0);
        const NAGY_KEP = new NagyKep($("#nagyKep"), MODEL.aktualisKep());
        $(window).on("balra", event => {
            MODEL.balra();
            NAGY_KEP.nagyKepCsere(MODEL.aktualisKep());
        });
        $(window).on("jobbra", event => {
            MODEL.jobbra();
            NAGY_KEP.nagyKepCsere(MODEL.aktualisKep());
        });
    }
}

export default Controller;