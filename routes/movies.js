const router = require("express").Router
const movieController = require("../controllers/movies")

router.post("/addMovie", movieController.postCreateMovie)

router.post("/readMovie", movieController.postReadMovie)

router.post("/readMovies", movieController.postReadMovies)

router.post("/updateMovie", movieController.postUpdateMovie)

/*router.post("/deleteMovie", movieController.post)*/

module.exports = router