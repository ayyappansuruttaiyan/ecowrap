import userRouter from './routers/userRouter.js'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import express from 'express'

const app = express()

//database
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', ()=>{
    console.log('database connected')
})

app.use('/api/users', userRouter);
//endpoints
app.get('/', (req, res) => {
    res.send('<ul><li>welcome</li></ul>')
})
app.get('/api/users', (req, res) => {
    res.send(users);
})

const port = process.env.PORT || 3000;
app.listen(port, 
    ()=> console.log(`App is listing port no ${port}`)
)