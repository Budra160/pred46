const apiEnpoint = "https://dummyjson.com/todos"

export async function dohvatiZadatke(){
    const response = await fetch(`${apiEnpoint}?limit=20`)

    if(!response.ok) {
        throw new Error("Greska prilikom dohvacanja zadatka")
    }

    return (await response.json()).todos
}

export async function postZadatak(zadatak){

    fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(zadatak)
      })
      .then(res => res.json())
      .then(console.log);
}