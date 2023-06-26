const express = require('express')
const { FoodModel } = require('../model/Food.model')

const FoodRoute = express.Router()


FoodRoute.get('/', async (req, res) => {
    const Food = await FoodModel.find()
    res.send(Food)
})

FoodRoute.post('/add', async (req, res) => {
    // const { name, category, description, price, place, image1, image2, image3, image4, image5 } = req.body
    try {
        const data = new FoodModel(req.body)
        await data.save()
        res.send({ msg: "Food has been added successfully", "success": true })
    } catch (err) {
        res.send({ msg: "Not added", "success": false })
        console.log(err)
    }
})

FoodRoute.patch('/update/:_id', async (req, res) => {
    try {
        const _id = req.params._id
        const payload = req.body
        await FoodModel.findByIdAndUpdate({ _id }, payload)
        res.send({ msg: "Food has been updated successfully", "success": true })
    } catch (err) {
        res.send({ msg: "Not updated", "success": false })
        console.log(err)
    }
})

FoodRoute.delete('/delete/:_id', async (req, res) => {
    try {
        const _id = req.params._id
        await FoodModel.findByIdAndDelete({ _id })
        res.send({ msg: "Food has been deleted successfully", "success": true })
    } catch (err) {
        res.send({ msg: "Not deleted", "success": false })
        console.log(err)
    }
})

module.exports = {
    FoodRoute
}
// name: String,
// category: String, //veg or nonveg
// description: String,
// price: Number,
// place: String,
// image1: String,
// image2: String,
// image3: String,
// image4: String,
// image5: String