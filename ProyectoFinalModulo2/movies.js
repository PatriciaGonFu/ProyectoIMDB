class Movie{
    constructor (title, releaseYear, nationality, genre, actors, writer, director, photo){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
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
            nationality: this.nationality,
            genre: this.genre,
            actors: this.actors,
            writer: this.writer,
            director: this.director,
            photo: this.photo
        };
    }
}

let movie1 = new Movie('Top Gun', 1986, 'Estadounidense', 'acción', 'Tom Cruise, Kelly McGillis','Jim Cash, Jack Epps Jr.', 'Tony Scott','https://m.media-amazon.com/images/I/71JXK7v7pvL._SL1500_.jpg');
let movie2 = new Movie('Los Goonies', 1985, 'Estadounidense', 'Aventura', 'Sean Astin, Josh Brolin','Chris Columbus', 'Richard Donner', 'https://www.entreletras.eu/wp-content/uploads/2021/Cine/los-goonies.jpg' );
let movie3 = new Movie('Regreso al Futuro', 1985, 'Estadounidense', 'Ciencia Ficción', 'Michael J. Fox, Christopher Lloyd', 'Robert Zemeckis, Bob Gale', 'Robert Zemeckis', 'https://pics.filmaffinity.com/back_to_the_future-100822308-large.jpg');
let movie4 = new Movie('Grease', 1978,'Estadounidense','Musical', 'John Travolta, Olivia Newton-John', 'Bronte Woodard','Randal Kleiser', 'https://pics.filmaffinity.com/grease-132471235-large.jpg');
let movie5 = new Movie('La princesa prometida',1987, 'Estadounidense', 'Aventuras', 'Cary Elwes, Robin Wright, Mandy Patinkin', 'William Goldman','Rob Reiner', 'https://cinesembajadores.es/wp-content/uploads/2021/02/La_princesa_prometida_poster-719x1024.jpg'  );
const newMovies = [movie1, movie2, movie3, movie4, movie5]

function volcarMovies() {
  let card = "";
  for (let i = 0; i < newMovies.length; i++) {
      card += `<div class="card">
          <div class="img-container">
              <img src="${newMovies[i].photo}" alt="">
          </div>
          <h6>${newMovies[i].title}</h6>
          <p>Año de producción: ${newMovies[i].releaseYear}</p>
          <p>Nacionalidad: ${newMovies[i].nationality}</p>
          <p>Género: ${newMovies[i].genre}</p>
          <p>Actores: ${newMovies[i].actors}</p>
          <p>Guionista: ${newMovies[i].writer}</p>
          <p>Director: ${newMovies[i].director}</p>
      </div>`;
  }
  document.getElementById('volcarMovies').innerHTML = card;
}

function cargarMovies(){
  const title = document.getElementById('title').value;
    const releaseYear = document.getElementById('releaseYear').value;
    const nationality = document.getElementById('nationality').value;
    const genre = document.getElementById('genre').value;
    const actors = document.getElementById('actors').value;
    const writer = document.getElementById('writer').value;
    const director = document.getElementById('director').value;
    const photo = document.getElementById('photo').value;
    
  let newMovie = new Movie(title, releaseYear, nationality, genre, actors, writer, director, photo);
  newMovies.push(newMovie);
  volcarMovies();
}
