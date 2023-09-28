import { paratlanTag } from "../../htmlUtils.js";
import { KEPEK_MAPPA_ELERES } from "../model/adat.js";
import EgyKepesView from "./EgyKepesView.js";

class KisKep extends EgyKepesView
{
    #szuloElem;
    #index;

    constructor(szuloElem, kep, index)
    {
        super(szuloElem, kep);
        this._szuloElem.append(paratlanTag("img", { src: KEPEK_MAPPA_ELERES + this._kep.kep, alt: `${this._kep.gyarto}: ${this._kep.modell}`, class: "img-thumbnail" }));
    }
}

export default KisKep;