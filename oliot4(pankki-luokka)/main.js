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

class tarkistus extends pankki {
    static tarkista() {
        let numero = pankki1.tilinumero
        numero = numero.toLowerCase()
        numero = numero.replace(/\s/g, '');
        if(numero.length != 18) {
            console.log("koitappa uudestaan")
            pankki1 = new pankki(prompt("syötä tilinumero"), prompt("syötä saldo"), [])
        } else {
            const ekat = numero.slice(0, 2);
            
            if(ekat != "fi") {
                console.log("koitappa uudestaan")
                pankki1 = new pankki(prompt("syötä tilinumero"), prompt("syötä saldo"), [])
            } else {
                console.log("hyvä hyvä")
            }
        }
    }
}

let pankki1 = new pankki(prompt("syötä tilinumero"), prompt("syötä saldo"), [])

let  validaattori = new tarkistus();
tarkistus.tarkista()

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


