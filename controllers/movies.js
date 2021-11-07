const Movie = require("../models/movies")

exports.postCreateMovie = async(req,res)=>{
    const movie = new Movie(req.body);
    try{
        await movie.save()
        console.log(movie)
        console.log("Movie registered")
    } catch(err) {
        console.log(err)
        return res.status(422)
    }
}

exports.postReadMovies = async(req,res)=>{
    Movie.find((err, movies) => {
        if(err) return res.status(422).send(movies)
    });
}

exports.postReadMovie = async(req, res)=> {
    Movie.findById(req.parameters.movieID, (err, movie) =>{
        if (err) return res.status(422).send(movie)
    });
}

exports.postUpdateMovie = async(req, res)=>{
    Movie.findByIdAndUpdate(
        req.params.movieID,
        req.body,
        {new:true},
        (err, movie) => {
            if (err) return res.status(422).send(err)
            return res.send(movie)
        }
    )
}

/*exports.postDeleteMovie = async(req, res)=>{
    
}*/

