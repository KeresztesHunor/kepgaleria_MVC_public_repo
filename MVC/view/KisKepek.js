import { parosTag } from "../../htmlUtils.js";
import KisKep from "./KisKep.js";
import View from "./View.js";

class KisKepek extends View
{
    #kepLista;
    #kisKepTaroloElem;

    constructor(szuloElem, kepLista)
    {
        super(szuloElem);
        this.#kepLista = kepLista;
        this._szuloElem.html(parosTag("div", { class: "kis-kep-tarolo" }));
        this.#kisKepTaroloElem = this._szuloElem.children(".kis-kep-tarolo");
        this.#kepLista.forEach((elem, index) => {
            new KisKep(this.#kisKepTaroloElem, elem, index);
        });
    }
}

export default KisKepek;