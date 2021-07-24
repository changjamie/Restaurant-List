const express = require('express')// 引用Express
const router = express.Router()// 引用Express路由器
const Restaurant = require('../../models/restaurant') // 載入 restaurant model


// 新增頁面路由設定
router.get('/new', (req, res) => {
  return res.render('new')
})

// 資料庫新增資料路由設定
router.post('/', (req, res) => {
  const { name, name_en, image, category, rating, location, google_map, phone, description } = req.body

  return Restaurant.create({ name, name_en, image, category, rating, location, google_map, phone, description })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// 詳細內容頁面路由設定
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('detail', { restaurant }))
    .catch(error => console.log(error))
})

// 修改頁面路由設定
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch(error => console.log(error))

})

// 資料更新路由設定
router.put('/:id', (req, res) => {
  const id = req.params.id
  const { name, name_en, image, category, rating, location, google_map, phone, description } = req.body
  return Restaurant.findById(id)
    .then(restaurant => {
      restaurant.name = name
      restaurant.name_en = name_en
      restaurant.image = image
      restaurant.category = category
      restaurant.rating = rating
      restaurant.location = location
      restaurant.google_map = google_map
      restaurant.phone = phone
      restaurant.description = description
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

//刪除特定資料(用id刪)
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))

})


module.exports = router
