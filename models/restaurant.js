//定義結構資料
const mongoose = require('mongoose')//載入mongoose
const Schema = mongoose.Schema
const restaurantSchema = new Schema({
  id: {
    type: Number
  },
  name: {
    type: String,
    required: true
  },
  name_en: {
    type: String,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  location: {
    type: String,
  },
  phone:{
    type: String,
  },
  google_map: {
    type: String,
  },
  rating: {
    type: Number,
  },
  description: {
    type: String,
  }
})
module.exports = mongoose.model('Restaurant', restaurantSchema) //把schema輸出 即可利用Restaurant操作資料