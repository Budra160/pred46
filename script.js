import { Sekcija } from "./components/sekcija"
import { Zadatak } from "./components/zadatak"
import { dohvatiZadatke } from "./services/api-service"

const main = document.querySelector("#glavni-sadrzaj")

main.innerHTML = `
    <h1>Upravljanje zadatcima</h1>  
    ${Sekcija("Zadaci", `<div>dodaj filtriranje</div><div id="zadaci" class="kartice"></div>`)}
    ${Sekcija("Dodaj zadatak", `<div>dodaj formu za dodavanje zadatka</div>`)}
`

const zadaciWrapper = document.querySelector("#zadaci")
let zadaci = []

async function dohvatiPrikaziZadatke() {
    zadaciWrapper.textContent = "Ucitavanje zadataka..."

    try {
        zadaci = await dohvatiZadatke()
        prikaziZadatke()
    } catch {
        zadaciWrapper.textContent = "Doslo je do greske prilikom ucitavanja zadataka. Molimo osvjezite stranicu."   
    }
}

dohvatiPrikaziZadatke()

function prikaziZadatke() {
    zadaciWrapper.innerHTML = zadaci.length ? zadaci.map(Zadatak).join("") : "Nema zadataka za prikaz"
}

console.log(zadaci)