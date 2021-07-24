const mongoose = require('mongoose')
const Restaurant = require('../restaurant')// 載入 restaurant model
const restaurantList = require('../../restaurant.json')//引入restaurant.json
const data = restaurantList.results

const db = require('../../config/mongoose')


db.once('open', () => {
  data.forEach((restaurant) => {
    Restaurant.create({
      id: restaurant.id,
      name: restaurant.name,
      name_en: restaurant.name_en,
      category: restaurant.category,
      image: restaurant.image,
      location: restaurant.location,
      phone: restaurant.phone,
      google_map: restaurant.google_map,
      rating: restaurant.rating,
      description: restaurant.description
    })
  })
  console.log('seeder done')
})


