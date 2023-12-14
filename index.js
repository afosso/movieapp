const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjA1NDQ4NDZlM2NlMzUwYmY5MWQ2OGIxODkzMWMwZiIsInN1YiI6IjVkMzRiZmY4MDY5ZjBlMDAxMGNmNzRhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p61VbCoHgHcNwpJtaNQ0BbqiDgmf08qF41ARMOBDt0A'
  }
};

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => {
    response.results.forEach(movie => {
      var cardMovie = `<div class="col-lg-3 col-6">
          <div class="card">
            <div class="card-header">
              <h3>${movie.title}</h3>
            </div>
            <div class="card-body">

              <img 
              src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" 
              alt="${movie.title}" width="375px">

              <p>${movie.overview}</p>
            </div>
            <div class="card-footer">
              <i class="fas fa-star" style="color: yellowgreen;"></i> ${movie.vote_average}
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onclick="detalle(${movie.id})">
                Launch demo modal
              </button>
            </div>
          </div>
        </div>`
      document
      .getElementById("containerMovies")
      .innerHTML += cardMovie;
    });
    
  })
  .catch(err => console.error(err));

  function detalle(id) {
    fetch('https://api.themoviedb.org/3/movie/' + id, options)
    .then(response => response.json())
    .then(response => {
      document.getElementById("title").innerText = response.title
      // document.getElementById("containerMovies").innerHTML = "";

      // var cardMovie = `<div class="col-lg-3 col-6">
      //     <div class="card">
      //       <div class="card-header">
      //         <h3>${response.title}</h3>
      //       </div>
      //       <div class="card-body">

      //         <img 
      //         src="https://image.tmdb.org/t/p/w500${response.backdrop_path}" 
      //         alt="${response.title}" width="375px">

      //         <p>${response.overview}</p>
      //       </div>
      //       <div class="card-footer">
      //         <i class="fas fa-star" style="color: yellowgreen;"></i> ${response.vote_average}
      //         ${response.release_date}
      //       </div>
      //     </div>
      //   </div>`
      //   document.getElementById("containerMovies").innerHTML = cardMovie
    //   document
    //   .getElementById("containerMovies")
    //   .innerHTML += cardMovie;
    // });
    
  })
  .catch(err => console.error(err));
  }