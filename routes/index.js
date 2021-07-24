//此處為總路由器
const express = require('express')// 引用Express
const router = express.Router()// 引用Express路由器

const home = require('./modules/home')// 引入 home 模組程式碼
const restaurants = require('./modules/restaurants')// 引入 restaurants 模組程式碼

router.use('/', home)// 將網址結構符合 / 字串的 request 導向 home 模組 
router.use('/restaurants', restaurants)// 將網址結構符合 /restaurants 字串開頭的 request 導向 restaurants 模組

module.exports = router// 匯出路由器