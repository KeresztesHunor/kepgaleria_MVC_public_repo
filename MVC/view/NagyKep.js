import { paratlanTag, parosTag } from "../../htmlUtils.js";
import { KEPEK_MAPPA_ELERES } from "../model/adat.js";
import EgyKepesView from "./EgyKepesView.js";

class NagyKep extends EgyKepesView
{
    #balGombElem;
    #jobbGombElem;
    #nagyKepHelyeElem;

    constructor(szuloElem, kep)
    {
        super(szuloElem, kep);
        this.#htmlOsszerak();
        this.#nagyKepHelyeElem = $("#nagyKepHelye");
        this.#balGombElem = $("#bal")
        this.#jobbGombElem = $("#jobb");
        this.#balGombElem.on("click", () => {
            window.dispatchEvent(new CustomEvent("balra", { detail: this }));
        });
        this.#jobbGombElem.on("click", () => {
            window.dispatchEvent(new CustomEvent("jobbra", { detail: this }));
        });
    }

    #htmlOsszerak()
    {
        let txt = "";
        txt += parosTag("button", { id: "bal", class: "btn btn-primary" }, ["◀"]);
        txt += parosTag("div", { class: "card" }, [
            parosTag("div", { class: "card-header" }, [`${this._kep.gyarto ?? "Ismeretlen gyártó"}: ${this._kep.nev ?? "Ismeretlen modell"}`]),
            parosTag("div", { id: "nagyKepHelye", class: "card-body" }, [
                paratlanTag("img", { src: KEPEK_MAPPA_ELERES + this._kep.kep, alt: `${this._kep.gyarto}: ${this._kep.modell}`, class: "img-thumbnail"})
            ]),
            parosTag("div", { class: "card-footer" }, [`Évjárat: ${this._kep.evjarat ?? "N/A"} Lóerő: ${this._kep.loero ?? "N/A"}`])
        ]);
        txt += parosTag("button", { id: "jobb", class: "btn btn-primary" }, ["▶"]);
        this._szuloElem.html(txt);
    }

    nagyKepCsere(kep)
    {
        this.#nagyKepHelyeElem.html(paratlanTag("img", { src: KEPEK_MAPPA_ELERES + kep.kep, alt: `${kep.gyarto}: ${kep.nev}`, class: "img-thumbnail" }));
    }
}

export default NagyKep;