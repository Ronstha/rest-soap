const express=require('express')
const app=express()
app.use(express.json())
app.post('/calculate',(req,res)=>{
    const {a,b}=req.body
    if(!a||!b){
        res.status(400).json({'message':"Invalid Data"})
        return
    }
    res.status(200).json({
        sum:a+b,
        difference:a-b
    })
    return
})




app.listen(8000,()=>{
    console.log(`Server running at PORT 8000`)
})