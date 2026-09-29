import { Sekcija } from "./components/sekcija.js"
import { Zadatak } from "./components/zadatak.js"
import { dohvatiZadatke, postZadatak } from "./services/api-service.js"
import { createForm } from "./components/form.js"

const main = document.querySelector("#glavni-sadrzaj")

main.innerHTML = `
    <h1>Upravljanje zadatcima</h1>  
    ${Sekcija("Zadaci", `<div>dodaj filtriranje</div><div id="zadaci" class="kartice"></div>`)}
    ${Sekcija("Dodaj zadatak", `<div class="form-wrapper">${createForm("upload")}</div>`)}
    `


const zadaciWrapper = document.querySelector("#zadaci")
let zadaci = []

async function dohvatiPrikaziZadatke() {
    zadaciWrapper.textContent = "Ucitavanje zadataka..."

    try {
        zadaci = await dohvatiZadatke()
        prikaziZadatke()
        console.log(zadaci)
    } catch {
        zadaciWrapper.textContent = "Doslo je do greske prilikom ucitavanja zadataka. Molimo osvjezite stranicu."   
    }
}

dohvatiPrikaziZadatke()

function prikaziZadatke() {
    zadaciWrapper.innerHTML = zadaci.length ? zadaci.map(Zadatak).join("") : "Nema zadataka za prikaz"
}



//Event listener gumb -Josip

const gumb = document.getElementById("submit");

gumb.addEventListener("click", e => {
    e.preventDefault();

    const zadText = document.getElementById("zad").value;
    const zadId = document.getElementById("zadId").value;
    const userId = Math.round((Math.random()), 2) * 100;
    let zadObj = {
        id : zadId,
        todo: zadText,
        completed: false,
        userId : userId
    };

    postZadatak(zadObj);
    zadaciWrapper.innerHTML += zadObj ? Zadatak(zadObj) : alert("Nešto je pošlo krivu");

    console.log(zadObj);
})