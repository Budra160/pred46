const apiEnpoint = "https://dummyjson.com/todos"

export async function dohvatiZadatke(){
    const response = await fetch(`${apiEnpoint}?limit=20`)

    if(!response.ok) {
        throw new Error("Greska prilikom dohvacanja zadatka")
    }

    return (await response.json()).todos
}