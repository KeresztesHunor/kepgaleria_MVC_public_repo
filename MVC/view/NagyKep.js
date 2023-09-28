import { paratlanTag, parosTag } from "../../htmlUtils.js";

class NagyKep
{
    #szuloElem;
    #kep;
    #balGombElem;
    #jobbGombElem;
    #nagyKepHelyeElem;

    constructor(szuloElem, kep)
    {
        this.#szuloElem = szuloElem;
        this.#kep = kep;
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
            parosTag("div", { class: "card-header" }, ["Főkép"]),
            parosTag("div", { id: "nagyKepHelye", class: "card-body" }, [
                paratlanTag("img", { src: "kepek/" + this.#kep.kep, alt: this.#kep.kep, class: "img-thumbnail"})
            ]),
            parosTag("div", { class: "card-footer" }, ["Leírás"])
        ]);
        txt += parosTag("button", { id: "jobb", class: "btn btn-primary" }, ["▶"]);
        this.#szuloElem.html(txt);
    }

    nagyKepCsere(kep)
    {
        this.#nagyKepHelyeElem.html(paratlanTag("img", { src: "kepek/" + kep.kep, alt: kep, class: "img-thumbnail" }));
    }
}

export default NagyKep;