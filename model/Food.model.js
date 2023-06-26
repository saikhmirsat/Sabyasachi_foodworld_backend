const mongoose = require('mongoose')

const foodSchema = mongoose.Schema({
    name: String,
    category: String, //veg or nonveg
    description: String,
    price: Number,
    place: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    image5: String
}, {
    versionKey: false
})

const FoodModel = mongoose.model('Food', foodSchema)

module.exports = {
    FoodModel
}