export default async function getCharacters() {
    let allChars = [];
    let i = 1;
    let reponse = await fetch(
        "https://rickandmortyapi.com/api/character/?page=" + i
    );
    let data = await reponse.json();
    while (!data.hasOwnProperty("error")) {
        reponse = await fetch(
            "https://rickandmortyapi.com/api/character/?page=" + i
        );
        data = await reponse.json();
        if (data.hasOwnProperty("error")) {
            break;
        }
        allChars = allChars.concat(data.results);
        i++;
    }
    return allChars;
}
