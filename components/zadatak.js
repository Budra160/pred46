import { Button } from "./button";

export function Zadatak(zadatak) {
    const status = zadatak.completed ? "Završen" : "Otvoren"
    return `
        <div class="kartica">
            <h3>${zadatak.todo}</h3>
            <p>Status: ${status}</p>
            <p>Dodijeljeno korisniku: ${zadatak.userId}</p>
            ${Button("Obriši", "obrisi-gumb", {"data-obrisi-id": zadatak.id})}
        </div>
    `;
}
