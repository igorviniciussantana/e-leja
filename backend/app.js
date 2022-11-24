const express = require('express')
const app = express()
const PORT = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req,res)=>{
    res.send('<h1>E-leja - First Page</h1>')
})

app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`)
})