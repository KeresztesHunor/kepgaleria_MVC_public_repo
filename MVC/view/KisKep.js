import { paratlanTag } from "../../htmlUtils.js";
import { KEPEK_MAPPA_ELERES } from "../model/adat.js";
import EgyKepesView from "./EgyKepesView.js";

class KisKep extends EgyKepesView
{
    #index;
    #kisKepElem;

    constructor(szuloElem, kep, index)
    {
        super(szuloElem, kep);
        this.#index = index;
        this._szuloElem.append(paratlanTag("img", { src: KEPEK_MAPPA_ELERES + this._kep.kep, alt: `${this._kep.gyarto}: ${this._kep.modell}`, class: "img-thumbnail" }));
        this.#kisKepElem = this._szuloElem.children("img:last-child");
        this.#kisKepElem.on("click", () => {
            window.dispatchEvent(new CustomEvent("kisKepreKattintottEvent", {
                detail: {
                    index: this.#index
                }
            }));
        });
    }
}

export default KisKep;