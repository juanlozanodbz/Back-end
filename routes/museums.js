const express = require('express')
const router = express.Router()
const museumController = require("../controllers/museums")

router.post("/addMuseum", museumController.postCreateMuseum)

router.post("/readMuseum", museumController.postReadMuseum)

router.post("/readMuseums", museumController.postReadMuseums)

router.post("/updateMuseum", museumController.postUpdateMuseum)

/*router.post("/deleteMovie", movieController.post)*/

module.exports = router