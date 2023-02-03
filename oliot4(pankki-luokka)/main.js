class pankki {
    constructor(tilinumero, saldo, historia, korko, nettotulot, luotto) {
        this.tilinumero = tilinumero
        this.saldo = saldo
        this.historia = historia
        this.korko = korko
        this.nettotulot = nettotulot
        this.luotto = luotto
    }

    tiedot() {
        return this.tilinumero, this.saldo, this.historia, this.korko, this.nettotulot, this.luotto
    }
}

//tarkistetaan onko käyttäjän antama tilinumero validi
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

//kysyy sivun ladattua tiedot käyttäjältä
let pankki1 = new pankki(prompt("syötä tilinumero"), prompt("syötä saldo"), [], 0, prompt("syötä nettotulot"), 0)


//kutsuu tarkistus metodia
let  validaattori = new tarkistus();
tarkistus.tarkista()

//paljonko rahaa talletetaan tilille
function talleta() {
    let talletuksenMäärä = parseFloat(prompt())
    pankki1.saldo = pankki1.saldo + talletuksenMäärä

    console.log(pankki1.saldo)

    const date = new Date();
    pankki1.historia.push((date + " talletus " + talletuksenMäärä + " saldo ennen talletusta " + (pankki1.saldo - talletuksenMäärä)))
}


//paljonto rahaa nostetaan
function nosta() {
    let nostonMäärä = parseFloat(prompt())

    if(pankki1.saldo > nostonMäärä) {
        pankki1.saldo = pankki1.saldo - nostonMäärä

        console.log(pankki1.saldo)
        pankki1.historia.push((date + " nosto " + nostonMäärä + " saldo ennen nostoa " + (pankki1.saldo + nostonMäärä)))

    //jos tilillä ei ole tarpeeksi rahaa nostaminen estetään
    } else {
        console.log("tililläsi ei ole tarpeeksi rahaa")
    }
}

//näyttää tahpahtumien historian
function historia() {
    console.log(pankki1.historia)
}

//näyttää tallennetut tiedot
function näytäTiedot() {
    console.log(pankki1)
}

//kysyy korkoa
function korko() {
    pankki1.korko = pankki1.korko + prompt()
}

//kyssyy luotom määrää
function luotto() {
    let luotto = pankki1.luotto + parseFloat(prompt("syötä määrä"))
    if(luotto > 0.25 * pankki1.nettotulot) {
        let yli = luotto - 0.25 * (pankki1.nettotulot)
        console.log("luotto ylittää luottorajan " + yli + " eurolla")
    } else {
        console.log(luotto)
    }
}