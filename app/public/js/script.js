
document.getElementById('movieForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const movieName = document.getElementById('movieName').value;
    const response = await fetch(`/movie?movieName=${encodeURIComponent(movieName)}`);

    const movieResultDiv = document.getElementById('movieResult');

    if (response.ok) {
        const data = await response.json();

        movieResultDiv.innerHTML = `
        <h2>Movie Result:</h2>
        <div class="img_cont"><img src="${data.data.Poster}" alt="${data.data.Title} Poster" style="max-width: 100%; border-radius: 5px;"></div>
        <p><strong>Title:</strong> ${data.data.Title}</p>
        <p><strong>Type:</strong> ${data.data.Type}</p>
        <p><strong>Year:</strong> ${data.data.Year}</p>
        <p><strong>Rated:</strong> ${data.data.Rated}</p>
        <p><strong>Released:</strong> ${data.data.Released}</p>
        <p><strong>Runtime:</strong> ${data.data.Runtime}</p>
        <p><strong>Genre:</strong> ${data.data.Genre}</p>
        <p><strong>Director:</strong> ${data.data.Director}</p>
        <p><strong>Writer:</strong> ${data.data.Writer}</p>
        <p><strong>Actors:</strong> ${data.data.Actors}</p>
        <p><strong>Plot:</strong> ${data.data.Plot}</p>
        <p><strong>Language:</strong> ${data.data.Language}</p>
        <p><strong>Country:</strong> ${data.data.Country}</p>
        <p><strong>Awards:</strong> ${data.data.Awards}</p>
        <p><strong>IMDb Rating:</strong> ${data.data.imdbRating}</p>
        <p><strong>IMDb ID:</strong> ${data.data.imdbID}</p>
        <p><strong>IMDb Votes:</strong> ${data.data.imdbVotes}</p>
        <p><strong>Box Office:</strong> ${data.data.BoxOffice}</p>
        <p><strong>Website:</strong> <a href="${data.data.Website}" target="_blank">${data.data.Website || "N/A"}</a></p>
        <p><strong>DVD:</strong> ${data.data.DVD}</p>
        <h3>Ratings:</h3>
       <ul>
        ${data.data.Ratings && data.data.Ratings.length > 0
                ? data.data.Ratings.map(rating => `<li>${rating.Source}: ${rating.Value}</li>`).join('')
                : '<li>No ratings available</li>'}
      </ul>
      `;
    } else {
        const error = await response.json();

        movieResultDiv.innerHTML = `<div class="error_cont"><p>${error.message}</p></div>`;
    }
});
