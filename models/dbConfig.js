
const mongoose = require('mongoose')


mongoose.connect(    
    'mongodb+srv://Nina55555:Pixel55555@cluster0.mogfd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => console.log('connection à la base de donnée reussie') )
    .catch(() => console.log('connexion à la base de donnée echoué') )



module.exports = mongoose