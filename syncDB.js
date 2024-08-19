import sequelize from "./database.js" 
//import Accommodations from "./models/modelTripGroup.js"
import Places from "./models/modelPlaces.js"

 
sequelize.sync().then(result => {
    console.log(result)
})

 