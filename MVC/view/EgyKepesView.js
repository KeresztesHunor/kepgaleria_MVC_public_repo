import View from "./View.js";

class EgyKepesView extends View
{
    constructor(szuloElem, kep)
    {
        super(szuloElem);
        this._kep = kep;
    }
}

export default EgyKepesView;