const app=require('./app')
const port=3000

app.get('/', (req,res)=>{
    res.send("hello testing world")
})

app.listen(3000  ,()=>{
  console.log(`server is runnig on https://localhost${port}`)
})
