
const firstNames = ["Alisa", "Angie", "Gaby", "Rosangely", "Yeraldine", "Eliana", "Inga", "DanielaR", "MariaLaura", "Taiza", "Nicole", "AnaLissette", "AnaGarcía", "DanielaT", "Marta", "Amanda", "Yasmis", "Sònia", "Leo", "Pepi", "Claudia", "Jolga", "Flo", "Ranju"];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomName = () =>
    `${firstNames[getRandomNumber(firstNames.length)]}`;

const setRandomName = () => {
    document.getElementById('random-name').innerText = getRandomName();
}
document.getElementById('generate')
    .addEventListener('click', setRandomName);

setRandomName();
