const mongoose = require('mongoose')
const request = require('request')

const url = process.env.MONGODB_URL
// 'mongodb://localhost:27017/s' || 
// process.env.MONGODB_URL || 
mongoose.connect(url)

// const url = 'http://api.weatherstack.com/current?access_key=d0197d0f5d113cf165c34158b74d6daa&query=23,85'

// request({ url:url,json:true },(error,{body})=>{
//   f(body)
// })

// const f = async (body)=>{
//   const s = new Search({e
//     lat:body.location.lat,
//     lon:body.location.lon,
//     location:body.location.name
//   })
//   await s.save()
//   console.log(s)
// }
