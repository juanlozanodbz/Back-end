const Museum = require("../models/museums")

exports.postCreateMuseum = async(req,res)=>{
    const museum = new Museum(req.body);
    try{
        await museum.save()
        console.log(museum)
        console.log("Museum registered")
    } catch(err) {
        console.log(err)
        return res.status(422)
    }
}

exports.postReadMuseums = async(req,res)=>{
    Museum.find((err, movies) => {
        if(err) return res.status(422).send(movies)
    });
}

exports.postReadMuseum = async(req, res)=> {
    Museum.findById(req.parameters.movieID, (err, movie) =>{
        if (err) return res.status(422).send(movie)
    });
}

exports.postUpdateMuseum = async(req, res)=>{
    Museum.findByIdAndUpdate(
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

