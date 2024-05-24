export default class Elem {
    #ertek=" ";
    #szuloElem;
    #divElem;
    #id;

    constructor(id, ertek, szuloelem){
        this.#id = id;
        this.#ertek = ertek;
        this.#szuloElem = szuloelem;
        this.#megjelenit()
        // rákattintunk az elemre
        this.#divElem=this.#szuloElem.children("div:last-child");
        // console.log(this.#divElem)
        this.#divElem.on("click",() => {
            if (this.#ertek===" "){
                this.#esemenyTrigger("lepes")
            }
        })
    }

    #megjelenit(){
        let txt=`<div><p>${this.#ertek}</p></div>`
        this.#szuloElem.append(txt)
    }
    // információ átadás eseményesetén másik osztálynak

    #esemenyTrigger(esemenyNev){
        // létrehoz egy saját eseményt, eseményNev néven, és átad adatokat saját magáról {detail: }
        const e = new CustomEvent(esemenyNev, {detail:this.#id})
        window.dispatchEvent(e)
    }

     /*Egy osztályban a tih,s a konkrét objektum példányt jelenti, de egy eseménykezelőben function névtelen
     függvénnyel használva azt a HTML elemet jelenti, amelyik az eseményt kiváltotta, nyil függvénnyel használva pedig
     az objektum példány használatára mutat */
}