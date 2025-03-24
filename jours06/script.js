const citations = [
  "J’ai vu tant de choses que vous, humains, ne pourriez pas croire...",
    "Tous ces moments se perdront dans l’oubli, comme des larmes dans la pluie.",
    "C’est dommage qu’elle doive mourir, mais c’est une expérience qu’elle partage avec tout le monde.",
    "La lumière qui brûle deux fois plus fort brûle deux fois moins longtemps.",
    "J’adore les tortues...",
    "C’est dur d’être un homme, n’est-ce pas ?"
];
const jumbotron = document.getElementById('jumbotron-button');
const cita = document.getElementById('citations');
const spinner = document.querySelector('.spinner-border');
const imageElement = document.getElementById('random-image');

const fetchRandomImage = async () => {
  try {
    const response = await fetch('https://picsum.photos/id/1/200/300');
    console.log(response.url);
    imageElement.src = response.url;
  } catch (error) {
    console.error('Erreur :', error);
  }
};

jumbotron.addEventListener('click', () => {
  fetchRandomImage();
  const random = Math.floor(Math.random() * citations.length);
  const nouvcitations = citations[random];
  cita.textContent = nouvcitations;
  

  spinner.classList.remove('visually-hidden');
  setTimeout(() => {
    spinner.classList.add('visually-hidden');
  }, 1000);
});


