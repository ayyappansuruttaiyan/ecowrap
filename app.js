const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

//database
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', ()=>{
    console.log('database connected')
})

const User = mongoose.model('Cat',{
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})
const users = [
    {
        email:'ayyappan.sjec@gmail.com',
        password: bcrypt.hashSync( '1234',8 ),
        is_admin: true,
        time: Date.now
    }
]
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