import Elem from "./Elem.js"

export default class JatekTer {
    #korSzamalalo = 0; // páros esetén X jön, páratlan esetén O
    #lista=[" "," "," "," "," "," "," "," "," "]

    constructor(){
        this.#megjelenit()

        // feliratkozik a lépés nevű eseményre
        $(window).on("lepes",(event)=>{
            console.log(event.detail)
            let id = event.detail;
            this.#lep(id)
        })
    }

    #lep(id){
        if(this.#korSzamalalo % 2 == 0){
            this.#lista[id]="X"
        }else{
            this.#lista[id]="O"
        }
        this.#korSzamalalo++;
        this.#megjelenit()
    }

    #megjelenit(){
        const szuloElem = $(".jatekter");
        szuloElem.empty()
        this.#lista.forEach((ertek, index)=>{
            const elem = new Elem(index, ertek, szuloElem)
        });
    }
}