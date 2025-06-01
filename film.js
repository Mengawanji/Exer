
const apiKey = "970e9b5a";

function searchMovies() {
    const query = document.getElementById("movieInput").value.trim();
    const movieDisplay = document.getElementById("display").value.trim();

    if (!query) {
        movieDisplay.innerHTML = "<p> Enter A Valid Movie </p>";
        return;

    } 
    movieDisplay.innerHTML ="<p>Loading...</p>";
    
     

    try {
        fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`)
          .then((res) => res.json())
          .then((data) => {
 
            if (data.Response === "True") {
              movieDisplay.innerHTML = data.Search.map(
                (movie) => `
            <div class="movie">
              <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}" alt="${movie.Title}">
              <h3>${movie.Title}</h3>
              <p>${movie.Year}</p>
            </div>
            `,
              ).join("");
            } else {
              movieDisplay.innerHTML = `<p>${data.Error}</p>`;
            }
          });
      } catch (error) {
        movieDisplay.innerHTML = `<p>Something went wrong. Please try again</p>`;
        console.log(error);
      }
    }