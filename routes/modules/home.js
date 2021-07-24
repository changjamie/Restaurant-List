const express = require('express')// 引用Express
const router = express.Router()// 引用Express路由器
const restaurantList = require('../../views')//讀取餐廳清單json檔
const Restaurant = require('../../models/restaurant') // 載入 restaurant model

//index頁路由設定
router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.error(error))

})




router.get('/search', (req, res) => {
  const keyword = req.query.keyword.toLowerCase().trim()
  Restaurant.find()
    .lean()
    .then((restaurants) => {
      restaurants = restaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(keyword) || restaurant.category.toLowerCase().includes(keyword)
      )
      if (restaurants.length === 0) {
        res.render('index', {
          restaurants: restaurants, keyword: keyword, alert: `
          <h1 class="display-5 mt-5 text-info text-center"><i class="far fa-dizzy fa-lg"></i>  Sorry no results</h1>
        `})
      } else {
        res.render('index', { restaurants: restaurants, keyword: keyword })
      }
    })
})



module.exports = router