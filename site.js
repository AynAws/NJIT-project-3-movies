/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json.map(movie => ({
                        ...movie,
                        hasLiked: false,
                        hasDisliked: false //default states for like/dislike tracking
                  }))
            })
      },
      data() {
        return {
            // This holds your movies.json data.
            movies: [],
            title: "IMDB + Ayaan’s Top 8 Movies",
            owner: "Ayaan",
            repoLink: "https://github.com/AynAws/NJIT-project-3-movies"
      }
    },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
            makeTextDate(dateArray) {
                  const months = [
                        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
                  ]
                  const [year, month, day] = dateArray
                  const monthName = months[month - 1]
                  return `${monthName} ${day}, ${year}`
            },
            like(index) {
                  const movie = this.movies[index]
                  if (!movie.hasLiked) {
                        if (movie.hasDisliked) {
                              movie.dislikes--
                              movie.hasDisliked = false
                        }
                        movie.likes++
                        movie.hasLiked = true
                  }
                  else {
                        movie.likes--
                        movie.hasLiked = false
                  }
            },
            dislike(index) {
                  const movie = this.movies[index]
                  if (!movie.hasDisliked) {
                        if (movie.hasLiked) {
                              movie.likes--
                              movie.hasLiked = false
                        }
                        movie.dislikes++
                        movie.hasDisliked = true
                  }
                  else {
                        movie.dislikes--
                        movie.hasDisliked = false
                  }
            },
            posterClick(index) {},
            timeText(minutes) {}
      }
})

vue_app.mount("#vue_app")