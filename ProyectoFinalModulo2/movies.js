import{Professional} from "./professional"

export class Movie{
    constructor (title, releaseYear, nacionality, genre, actors, writer, director, photo){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.actors = actors;
        this.writer = writer;
        this.director = director;
        this.photo = photo;

}

    showInfoMovie () {
        return {
            title: this.title,
            releaseYear: this.releaseYear,
            nacionality: this.nacionality,
            genre: this.genre,
            actors: this.actors,
            writer: this.writer,
            director: this.director,
            photo: this.photo
        };
    }
}

const newMovies = [
  {
    titulo: 'Top Gun',
    año: 1986,
    nacionalidad: 'Estadounidense',
    genero: 'Acción',
    actores: 'Tom Cruise, Kelly McGillis',
    guionista: 'Jim Cash, Jack Epps Jr.',
    director: 'Tony Scott'
  },
  {
    titulo: 'Los Goonies',
    año: 1985,
    nacionalidad: 'Estadounidense',
    genero: 'Aventura',
    actores: 'Sean Astin, Josh Brolin',
    guionista: 'Chris Columbus',
    director: 'Richard Donner'
  },
  {
    titulo: 'Regreso al Futuro',
    año: 1985,
    nacionalidad: 'Estadounidense',
    genero: 'Ciencia ficción',
    actores: 'Michael J. Fox, Christopher Lloyd',
    guionista: 'Robert Zemeckis, Bob Gale',
    director: 'Robert Zemeckis'
  },
  {
    titulo: 'Grease',
    año: 1978,
    nacionalidad: 'Estadounidense',
    genero: 'Musical',
    actores: 'John Travolta, Olivia Newton-John',
    guionista: 'Bronte Woodard',
    director: 'Randal Kleiser'
  }
];

function mostrarNewMovies() {
  const content = document.querySelector('.content');
  const cards = content.querySelectorAll('.card');

  for (let i = 0; i < newPelis.length; i++) {
    const currentCard = cards[i];
    const pelicula = newPelis[i];

    currentCard.querySelector('.titulo').innerHTML = `<b>${pelicula.titulo}</b>`;
    currentCard.querySelector('.info').innerHTML = `
      Año: ${pelicula.año} <br>
      Nacionalidad: ${pelicula.nacionalidad} <br>
      Género: ${pelicula.genero} <br>
      Actores: ${pelicula.actores} <br>
      Guionista: ${pelicula.guionista} <br>
      Director: ${pelicula.director} <br>
    `;
  }
}

