class pankki {
    constructor(tilinumero, saldo, historia) {
        this.tilinumero = tilinumero
        this.saldo = saldo
        this.historia = historia
    }

    tiedot() {
        return this.tilinumero, this.saldo, this.historia
    }
}

let pankki1 = new pankki("FI 49 66010001234568", 0, [])

/* let historia = pankki1.historia
 */
function talleta() {
    let talletuksenMäärä = parseFloat(prompt())
    pankki1.saldo = pankki1.saldo + talletuksenMäärä

    console.log(pankki1.saldo)

    const date = new Date();
    pankki1.historia.push((date + " talletus " + talletuksenMäärä + " saldo ennen talletusta " + (pankki1.saldo - talletuksenMäärä)))
}

function nosta() {
    let nostonMäärä = parseFloat(prompt())

    if(pankki1.saldo > nostonMäärä) {
        pankki1.saldo = pankki1.saldo - nostonMäärä

        console.log(pankki1.saldo)
    } else {
        console.log("tililläsi ei ole tarpeeksi rahaa")
    }
}

function historia() {
    console.log(pankki1.historia)
}

function näytäTiedot() {
    console.log(pankki1)
}