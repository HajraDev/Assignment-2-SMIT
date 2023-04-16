(async function () {
  const response = await fetch("./data.json");
  const movie = await response.json();

  const genreEle = document.getElementById("genre");
  const yearEle = document.getElementById("year");
  const languageEle = document.getElementById("language");
  const ratingEle = document.getElementById("rating");
  const btnEle = document.getElementById("searchInput");

  function displaySearchResult(results) {
    table.innerHTML = `<tr> 
    <td> ${movieData.id}</td> ,
    <td> ${movieData.title}</td>,
    <td> ${movieData.release_date}</td>
    </tr>`;
  }

  results.forEach((movie) => {
    let date = movie.release_date.split("-");
    let year = date[0];
    let time = toHoursAndaMinutes(movie.runtime);
    let hr = time.hours;
    let min = time.minutes;
    parseFloat.innerHTML = ``;
    table.innerHTML += `
      <tr class = "bg-white text-xl border-b dark:bg-gray-200 text-gray-900 dark:border-gray-700">
      <td class="px-6 py-3">${movie.id}</td>
      <td class="px-6 py-3 flex"><div><img class="px-2 inline-block" src="${
        "https://image.tmdb.org/t/p/w45" + movie.poster_path
      }"/></div>
      <div><div class="font-semibold text-xl text-blue-500 pb-2">
      ${movie.title}</div>
      <button class="bg-gray-100 border-black-500 border-2 text-blackfont-bold text-center p-[1px] mr-2 rounded">${
        movie.certification
      }</button>${movie.generes.toString(" , ")}.${hr}h ${min}m</div></td>
      <td class="px-6 py-3">${year}</td>
      </tr>
      `;
  });

  function search() {
    const query = genreEle.value;

    const results = movie.filter(function (movie) {
      return (
        movie.title.toLowerCase().includes(query) ||
        movie.genres.toString("").toLowerCase().includes(query)
      );
    });
    console.log(results);
  }
  // console.log(movie);
  // btnEle.addEventListener("load", search);
  btnEle.addEventListener("change", search);
})();
