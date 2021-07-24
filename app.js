
const express = require('express')// 載入網路框架
const app = express()// 將載入之網路框架存成變數
const port = 3000// 定義要使用連接埠號
const exphbs = require('express-handlebars')// 設定在Express中使用樣版引擎（載入樣版引擎）
const restaurantList = require('./restaurant.json')//讀取餐廳清單json檔
const Restaurant = require('./models/restaurant.js') // 載入 restaurant model
const bodyParser = require('body-parser')// 引用 body-parser
const methodOverride = require('method-override')// 載入 method-override
const routes = require('./routes')// 引用路由器

require('./config/mongoose')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))// 透過這個方法來定義要使用的樣板引擎(1)
app.set('view engine', 'hbs')// 透過這個方法來定義要使用的樣板引擎(2)
app.use(express.static('public'))// 告訴Express靜態檔案的資料夾位置來載入
app.use(bodyParser.urlencoded({ extended: true }))// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(methodOverride('_method'))// 設定每一筆請求都會透過 methodOverride 進行前置處理
app.use(routes)// 將request導入路由器


// 啟動並監聽伺服器
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})

