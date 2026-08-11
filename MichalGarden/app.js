import { error } from "console"
import express from "express"
import fs from 'fs/promises'
import { json } from "stream/consumers"


const app = express()


app.post('/post',async(req,res)=>{
    try{
        const read = await fs.readFile('./db.json','utf-8')
        const toArray = JSON.parse(read)
        toArray.push(req.body)
        await fs.writeFile('./db.json',JSON.stringify(toArray))
        res.status(201).json({messagw:"your question are in the system one of the exsper response to tou"})
    }
    catch(err){
        res.status(500).json({error:"internal server error"})
    }
})


app.listen(3000,()=> console.log("server listenig on port 3000"))