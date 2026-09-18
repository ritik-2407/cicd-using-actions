import express from 'express'

const app = express();

const PORT  = process.env.PORT ?? 8080

app.get('/' , (req , res) => {

    res.json("hello from cicd");
})

app.listen(PORT ,  ()=> {
    console.log("Server running fine on port 8080 ")
})